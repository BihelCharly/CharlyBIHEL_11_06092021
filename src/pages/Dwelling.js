import React from "react";
import {Redirect, useLocation} from 'react-router'
//import ReactDOM from 'react-dom'
import "../styles/Dwelling.scss";
import Dwellings from "../data/dwellings.json";
import Slider from "../components/Slider";
import Rating from "../components/Rating";
import Collapsible from "../components/Collapsible";

function Dwelling() {
	
  	const url = useLocation().search.toString().replace("?", "");
	const results = Dwellings.find(dwelling => dwelling.id === url);

	if (results === undefined) {
		return 	(
			<Redirect from="/Dwelling" to="/*" />
		)
	} else {
		return (
			<div className="main">
			<div className="dwelling-block">
				<Slider sliderImg = {results.pictures} />
				<h1 className="dwelling-title">{results.title}</h1>
				<p className="dwelling-location">{results.location}</p>
				<ul className="dwelling-tags">
					{results.tags.map((element, index) => (
						<li key={index}>{element}</li>
					))}
				</ul>
				<div className="host">
					<p className="host-name">{results.host.name}</p>
					<img src={results.host.picture} className="host-photo" alt="Photo de l'hôte" title={results.host.name}></img>
				</div>
				<Rating rate={results.rating} />
			</div>
					<div className="collapsibles-block">
					<div className="collapsible">
						<Collapsible open={false} title="Description" contentString={results.description} btnColClassName="collapse-title--dwelling" divColClassName="collapse-content--dwelling" />
					</div>
					<div className="collapsible">
						<Collapsible open={false} title="Équipements" contentArray={results.equipments} btnColClassName="collapse-title--dwelling" divColClassName="collapse-content--dwelling" />
					</div>
				</div>
			</div>
		);
	}
}

export default Dwelling;
