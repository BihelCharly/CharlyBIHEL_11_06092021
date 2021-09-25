import React from "react";
//import ReactDOM from 'react-dom';
import "../styles/Rating.scss";
import starRed from "../assets/star_red.png";
import starGrey from "../assets/star_grey.png";
import PropTypes from 'prop-types';

function Rating(props) {

    let rating = parseInt(props.rate);
    const stars = [];
    for (let i = 0 ; i < rating ; i++) {
        stars.push(<img className="star" key={i} src={starRed} />);
    }
    for (let i = stars.length ; i < 5 ; i++) {
        stars.push(<img className="star" key={i*i} src={starGrey} />);
    }

    return (
        <div className="rating-block">
            {stars}
        </div>
    );
}

Rating.propTypes = {
      rate: PropTypes.string
}

export default Rating;