import React from "react";
//import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import bgSea from "../assets/banner_sea.png";
import bgMountain from "../assets/banner_mountain.png";
import "../styles/Banner.scss";

class Banner extends React.Component {

    constructor(props){
        super(props);
		this.img = this.setImg(props.propsImg);
		this.txt = this.setTxt(props.propsImg);
    }

	setImg(data) {
		return data === "home" ? bgSea : bgMountain;
	}

	setTxt(data) {
		return data === "home" ? <h1 className="Banner-txt">Chez vous, partout et ailleurs</h1> : null;
	}

    render() {
    	return (
            <div className="Banner">
				{this.txt}
				<img src={this.img} className="Banner-img" alt="Photo de couverture" title="Kasa" />		
			</div>
        );
    }
}

Banner.propTypes = {
    propsImg: PropTypes.string
};

export default Banner;
