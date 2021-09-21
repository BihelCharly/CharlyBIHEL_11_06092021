import React from "react";
//import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from "react-router-dom";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Dwelling from "./Dwelling";
import AboutUs from "./AboutUs";
import Error404 from "./Error404";
import Footer from "./Footer";

function App() {
	return (
		<div className="App">
			<HashRouter basename="/">
				<Banner />
				<Switch>
					<Route exact={true} path="/" component={Gallery} />
					<Route path="/Dwelling" component={Dwelling} />
					<Route path="/AboutUs" component={AboutUs} />
					<Route path="*" component={Error404} />
					<Route component={Error404} />
				</Switch>
				<Footer />
			</HashRouter>
		</div>
	);
}

export default App;
