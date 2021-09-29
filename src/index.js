import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/404";
import Dwelling from "./pages/Dwelling";
import AboutUs from "./pages/AboutUs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.scss";

const Root = () =>(
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
);

ReactDOM.render( 
    <React.Fragment >
    	<Root/>
    </React.Fragment>,
    document.getElementById('root')
);

reportWebVitals();