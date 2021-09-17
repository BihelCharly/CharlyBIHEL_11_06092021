import React from "react";
//import ReactDOM from 'react-dom';
import "../styles/Banner.scss";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Banner() {
	return (
		<header>
			<img src={logo} className="LogoKasa" alt="Kasa" title="Logo de Kasa" />
			<nav>
				<li>
					<Link to="/">Accueil</Link>
				</li>
				<li>
					<Link to="/Error404">À Propos</Link>
				</li>
			</nav>
		</header>
	);
}

export default Banner;
