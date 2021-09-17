import React from "react";
//import ReactDOM from 'react-dom';
import "../styles/Error404.scss";
import { Link } from "react-router-dom";

function Error404() {
	return (
		<div className="error-block">
			<p>404</p>
			<p>Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/">Retourner sur la page d'accueil</Link>
		</div>
	);
}

export default Error404;
