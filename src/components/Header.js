import React from "react";
//import ReactDOM from 'react-dom';
import "../styles/Header.scss";
import AboutUs from "../pages/AboutUs";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<img src={logo} className="LogoKasa" alt="Kasa" title="Logo de Kasa" />
			<nav>
				<li>
					<Link to={"/"} className="home">Accueil</Link>
				</li>
				<li>
					<Link to={"/AboutUs"}>À Propos</Link>
				</li>
			</nav>
		</header>
	);
}

export default Header;
