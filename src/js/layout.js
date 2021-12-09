import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import ScrollToTop from "./views/scrollToTop";

// import { Home } from "./views/home";

import Navbar from "./views/Slides/Navbar/Navbar.jsx";

import PhilosophySlide from "./views/Slides/Philosophy/Philosophy.jsx";
import HydrogenSlide from "./views/Slides/Hydrogen/Hydrogen.jsx";

//create your first component
const Layout = () => (
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	// const basename = process.env.BASENAME || "";

	// return (
	<div>
		<BrowserRouter basename={process.env.BASENAME}>
			<Switch>
				<Navbar />
				<Route exact path="/" />
				<Route exact path="/philosophy" component={PhilosophySlide} />
				<Route exact path="/hydrogen" component={HydrogenSlide} />
				<Route>
					<h1>Not found!</h1>
				</Route>
			</Switch>
		</BrowserRouter>
	</div>
);
// );

export default Layout;
