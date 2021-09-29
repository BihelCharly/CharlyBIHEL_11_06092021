import React from "react";
//import ReactDOM from 'react-dom';
import logo2 from "../assets/logo2.png";
import "../styles/Footer.scss";

function Footer() {
	return (
		<footer>
			<img src={logo2} className="LogoKasa" alt="Kasa" title="Logo de Kasa" />
			<p>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}

export default Footer;
