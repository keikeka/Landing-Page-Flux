import React from "react";
import { Link } from "react-router-dom";

// Components
//Slides

import PhilosophySlide from "../Philosophy/Philosophy.jsx";
import HydrogenSlide from "../Hydrogen/Hydrogen.jsx";
// import CellFuelSlide from "./CarouselComponents/Slides/CellFuel/CellFuel.jsx";
// import PlatConVisionSlide from "./CarouselComponents/Slides/PlataformConceptVision/PlataformConceptVision.jsx";

//Footer
// import Footer from "./CarouselComponents/Slides/Footer/Footer.jsx";

//Buttons
// import CarouselButIndicators from "./CarouselComponents/CarouselButtons/CarouselButtonsIndicators/CarouselButtonsIndicators.jsx";
// import CarControlButtons from "./CarouselComponents/CarouselButtons/CarouselControlButtons/CarouselControlButtons.jsx";

// Resources
// import Car from "./CarouselComponents/Slides/DesignPack/Car.png";
import HextasiumLogo from "../../Slides/Navbar/HextasiumLogo.png";

// Styles
// import "./Carousel.scss";

// export const Navbar = () => {
// 	return (
// 		<nav className="navbar navbar-light bg-light mb-3">
// 			<Link to="/">
// 				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
// 			</Link>
// 			<div className="ml-auto">
// 				<Link to="/demo">
// 					<button className="btn btn-primary">Check the Context in action</button>
// 				</Link>
// 			</div>
// 		</nav>
// 	);
// };

const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-dark fixed-top">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						<img src={HextasiumLogo} className="img navbar-logo" width="50%" height="50%" alt="Site logo" />
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvasNavbar"
						aria-controls="offcanvasNavbar">
						<span className="navbar-toggler-icon" />
					</button>
					<div
						className="offcanvas offcanvas-end bg-dark"
						tabIndex="-1"
						id="offcanvasNavbar"
						aria-labelledby="offcanvasNavbarLabel">
						<div className="offcanvas-header">
							<h5 className="offcanvas-title text-white fs-4 fw-bold" id="offcanvasNavbarLabel">
								M i k i n i
							</h5>
							<button
								type="button"
								className="btn-close text-reset"
								data-bs-dismiss="offcanvas"
								aria-label="Close"
							/>
						</div>

						<div className="offcanvas-body">
							<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
								<li className="nav-item">
									<Link to="/Philosophy" className="nav-link active fs-4 fw-bold" aria-current="page">
										1. Philosophy
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/Hydrogen" className="nav-link fs-4 fw-bold">
										2. Hydrogen
									</Link>
								</li>
								<li className="nav-item">
									<a className="nav-link fs-4 fw-bold" href="#Fuel Cell">
										3. Fuel Cell / Platform
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link fs-4 fw-bold" href="#Design">
										4. Design
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link fs-4 fw-bold" href="#Contact">
										5. Contact
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
