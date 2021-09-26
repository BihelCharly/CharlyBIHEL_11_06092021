import React, { useState } from 'react';
import "../styles/Slider.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function Slider(props) {

    const imgArray = props.sliderImg;
    const [slide, setSlide] = useState(0);
    const slides = props.sliderImg.length;
    const arrowLeft = <FontAwesomeIcon icon={faChevronLeft} size="4x" color="white" fixedWidth/>
    const arrowRight = <FontAwesomeIcon icon={faChevronRight} size="4x" color="white" fixedWidth/>


    return (
            <div className="slider-block">
                {imgArray.map((element, index) => (
                    <img className="dwelling-photo" key={index} src={element} alt="Caroussel de photos" title={"Photo "+ index} style={{transform: "translateX(-" + slide * 100 + "%)"}}/>
                ))}
                { slides === 1 ? "" :
                    <>
                        <button className="arrow-left" title="Photo précédente" onClick={() => {setSlide(((slide - 1 % slides) + slides) % slides )}}>{arrowLeft}</button>
                        <button className="arrow-right" title="Photo suivante" onClick={() => {setSlide(((slide + 1 % slides ) + slides ) % slides )}}>{arrowRight}</button>
                    </>
                }
            </div>
    );
}

Slider.propTypes = {
      sliderImg: PropTypes.array
}

export default Slider;