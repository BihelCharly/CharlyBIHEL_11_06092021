import React from "react";
//import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import "../styles/Banner.scss";
import bgSea from "../assets/banner_sea.png";
import bgMountain from "../assets/banner_mountain.png";

class Banner extends React.Component {

      constructor(props){
        super(props);
		this.img = this.setImg(props.propsImg);
		this.txt = this.setTxt(props.propsImg);
      }

	  setImg(data) {
		  switch (data) {
			case "home":
				return bgSea;
		   	case "aboutus":
				return bgMountain;
			default:
				break;
		  }
	  }

	  setTxt(data) {
		  if(data === "home") {
			  return <h1 className="Banner-txt">Chez vous, partout et ailleurs</h1>;
		  }
	  }

      render() {
            return (
                 <div className="Banner">
					{this.txt}
					<img src={this.img} className="Banner-img" alt="Couverture" title="Couverture" />		
				</div>
            );
      }
}

Banner.propTypes = {
    propsImg: PropTypes.string
};

export default Banner;
