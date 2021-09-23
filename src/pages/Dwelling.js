import React from "react";
//import ReactDOM from 'react-dom'
import Collapsible from "../components/Collapsible";
import Error404 from "../components/Error404";
import "../styles/Dwelling.scss";
import Dwellings from "../data/dwellings.json";
import { useLocation } from "react-router-dom";

function Dwelling() {
	let urlParam = useLocation().search.toString().replace("?", "");
	let status;
	let ownerObj = result(Dwellings);
	function result(array) {
		for (let i = 0; i < array.length; i++) {
			if (array[i].id === urlParam) {
				status = true;
				return array[i];
			} else {
				status = false;
			}
		}
	}
	if (!status) {
		return <Error404 />;
	} else {
		return (
			<div className="main">
			<div className="dwelling-block">
				<img
					src={ownerObj.pictures[0]}
					className="dwelling-photo"
					alt=""
					title=""
				/>
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
