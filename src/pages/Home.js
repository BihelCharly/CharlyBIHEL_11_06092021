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
				{Dwellings.map((element) => (
					<NavLink
						to={{ pathname: "/Dwelling/", search: element.id }}
						key={element.id}
					>
						<div className="card">
							<p className="card--title">{element.title}</p>
							<img
								src={element.pictures[0]}
								className="card--photo"
								alt=""
								title={element.title}
							/>
						</div>
					</NavLink>
				))}
			</div>
		</div>
	);
}

export default Home;
