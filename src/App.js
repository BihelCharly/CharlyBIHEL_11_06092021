import React from "react";
//import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dwelling from "./pages/Dwelling";
import AboutUs from "./pages/AboutUs";
import "./App.scss";

function App() {

	return (
		<div className="App">
			<HashRouter basename="/">
				<Header />
				<Switch>
					<Route exact={true} path="/" component={Home} />
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
