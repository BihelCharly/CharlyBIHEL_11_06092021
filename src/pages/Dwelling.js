import React from "react";
//import ReactDOM from 'react-dom'
import "../styles/Dwelling.scss";
import Slider from "../components/Slider";
import Rating from "../components/Rating";
import Collapsible from "../components/Collapsible";
import Error404 from "../components/Error404";

import Dwellings from "../data/dwellings.json";
import { useLocation } from "react-router-dom";

function Dwelling() {
	
	let status = false;
	const url = useLocation().search.toString().replace("?", "");

	const ownerObj = ((array) =>
		{ for (let i = 0; i < array.length; i++) {
			if (url === array[i].id) {
				status = true;
				return array[i];
			}
		}
	})(Dwellings);

	if (!status) {
		return <Error404 />;
	} else {
		return (
			<div className="main">
			<div className="dwelling-block">
				<Slider sliderImg = {ownerObj.pictures} />
				<h1 className="dwelling-title">{ownerObj.title}</h1>
				<p className="dwelling-location">{ownerObj.location}</p>
				<ul className="dwelling-tags">
					<li>{ownerObj.tags[0]}</li>
					<li>{ownerObj.tags[1]}</li>
				</ul>
				<div className="host">
					<p className="host-name">{ownerObj.host.name}</p>
					<img
						src={ownerObj.host.picture}
						className="host-photo"
						alt="Locataire"
						title="Locataire"
					></img>
				</div>
				<Rating rate={ownerObj.rating} />
			</div>
					<div className="collapsibles-block">
					<div className="collapsible">
						<Collapsible open={true} title="Description" contentString={ownerObj.description} btnColClassName="collapse-title--dwelling" divColClassName="collapse-content--dwelling" />
					</div>
					<div className="collapsible">
						<Collapsible open={true} title="Équipements" contentArray={ownerObj.equipments} btnColClassName="collapse-title--dwelling" divColClassName="collapse-content--dwelling" />
					</div>
				</div>
			</div>
		);
	}
}

export default Dwelling;
