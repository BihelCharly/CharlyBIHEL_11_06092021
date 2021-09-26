import React from "react";
//import ReactDOM from 'react-dom'
import "../styles/Home.scss";
import Banner from "../components/Banner";
import Dwellings from "../data/dwellings.json";
import { NavLink } from "react-router-dom";

function Home() {
	return (
		<div className="main">
			<Banner propsImg="home"/>
			<div className="grid">
				{Dwellings.map((element, index) => (
					<NavLink to={{ pathname: "/Dwelling/", search: element.id }} key={index} >
						<article className="card">
							<p className="card--title">{element.title}</p>
							<img src={element.pictures[0]} className="card--photo" alt={"Photo "+ element.title} title={element.title} />
						</article>
					</NavLink>
				))}
			</div>
		</div>
	);
}

export default Home;
