import React from "react";
//import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import "../styles/Flag.scss";
import bgSea from "../assets/flag_sea.png";
import bgMountain from "../assets/flag_mountain.png";
import bg from "../assets/flag_bg.png";

class Flag extends React.Component {

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
			  return <h1 className="flag-txt">Chez vous, partout et ailleurs</h1>;
		  }
	  }

      render() {
            return (
                 <div className="flag">
					{this.txt}
					<img src={this.img} className="flag-img" alt="Couverture" title="Couverture" />		
				</div>
            );
      }
}

Flag.propTypes = {
    propsImg: PropTypes.string
};

export default Flag;
