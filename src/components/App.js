import React from "react";
//import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Dwelling from "./Dwelling";
import Error404 from "./Error404";
import Footer from "./Footer";

function App() {
	return (
		<div className="App">
			<Router forceRefresh={true}>
				<Banner />
				<Switch>
					<Route path="/" exact component={Gallery} />
					<Route path="/Dwelling" exact component={Dwelling} />
					<Route path="/" component={Error404} status={404} />
					<Route path="*" component={Error404} status={404} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
