import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home/Home.jsx";
import Navbar from "./views/Slides/Navbar/Navbar.jsx";
import DesignOne from "./views/Slides/DesignPack/DesignOne/DesignOne.jsx";
import DesignTwo from "./views/Slides/DesignPack/DesignTwo/DesignTwo.jsx";
import PlatConVisionSlide from "./views/Slides/PlataformConceptVision/PlataformConceptVision.jsx";
import Footer from "./views/Slides/Footer/Footer.jsx";
import PhilosophySlide from "./views/Slides/Philosophy/Philosophy.jsx";
import HydrogenSlide from "./views/Slides/Hydrogen/Hydrogen.jsx";
import CellFuelSlide from "./views/Slides/CellFuel/CellFuel.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	// const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename="/">
				<div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/navbar" component={Navbar} />
						<Route exact path="/philosophy" component={PhilosophySlide} />
						<Route exact path="/hydrogen" component={HydrogenSlide} />
						<Route exact path="/cellFuel" component={CellFuelSlide} />
						<Route exact path="/designOne" component={DesignOne} />
						<Route exact path="/designTwo" component={DesignTwo} />
						<Route exact path="/platConVision" component={PlatConVisionSlide} />
						<Route exact path="/footer" component={Footer} />
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default Layout;
