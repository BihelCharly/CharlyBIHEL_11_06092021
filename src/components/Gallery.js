import React from "react";
//import ReactDOM from 'react-dom'
import "../styles/Gallery.scss";
import Flag from "./Flag";
import Dwellings from "../data/dwellings.json";
import { NavLink } from "react-router-dom";

function Gallery() {
	return (
		<div>
			<Flag />
			<div className="grid">
				{Dwellings.map((element) => (
					<NavLink
						to={{ pathname: "/charlybihel_11_06092021/Dwelling/", search: element.id }}
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

export default Gallery;
