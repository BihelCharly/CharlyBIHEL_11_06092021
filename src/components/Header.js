import React from "react";
//import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Header.scss";

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
