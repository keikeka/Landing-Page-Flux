import React from "react";
import PhilosophySlide from "../Slides/Philosophy/Philosophy.jsx";
import HydrogenSlide from "../Slides/Hydrogen/Hydrogen.jsx";
import CellFuelSlide from "../Slides/CellFuel/CellFuel.jsx";
import Navbar from "../Slides/Navbar/Navbar.jsx";

import Hextasium from "../Slides/Navbar/HextasiumLogo.png";

import "./Nav&Tabs.scss";
import DesignOne from "../Slides/DesignPack/DesignOne/DesignOne.jsx";

const NavTabs = () => (
	<>
		{/* <!-- Nav tabs --> */}
		{/* <ul class="nav nav-tabs" id="myTab" role="tablist">
			<li class="nav-item" role="presentation">
				<button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
			</li>
			<li class="nav-item" role="presentation">
				<button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
			</li>
			<li class="nav-item" role="presentation">
				<button class="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Messages</button>
			</li>
			<li class="nav-item" role="presentation">
				<button class="nav-link" id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
			</li>
		</ul> */}

		<nav className="navbar navbar-dark fixed-top">
			<div className="container-fluid">
				<a className="navbar-brand">
					<img
						src={Hextasium}
						className="img navbar-logo"
						width="50%"
						height="50%"
						alt="Site logo"
					/>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasNavbar"
					aria-controls="offcanvasNavbar">
					<span className="navbar-toggler-icon "></span>
				</button>
				<div
					className="offcanvas offcanvas-end bg-dark"
					tabIndex="-1"
					id="offcanvasNavbar"
					aria-labelledby="offcanvasNavbarLabel">
					<div className="offcanvas-header">
						<h5
							className="offcanvas-title text-white fs-4 fw-bold"
							id="offcanvasNavbarLabel">
							M ī k i n i
						</h5>
						<button
							type="button"
							className="btn-close text-reset bg-light"
							data-bs-dismiss="offcanvas"
							aria-label="Close"></button>
					</div>

					<div className="offcanvas-body">
						<ul
							className="navbar-nav justify-content-end flex-grow-1 pe-3"
							id="myTab"
							role="tablist">
							<li className="nav-item" role="presentation">
								<a
									className="nav-link fs-4 fw-bold"
									id="philosophy-tab"
									data-bs-toggle="tab"
									data-bs-target="#philosophy"
									type="button"
									role="tab"
									aria-controls="philosophy"
									aria-selected="true"
									aria-current="page">
									1. Philosophy
								</a>
							</li>
							<li className="nav-item" role="presentation">
								<a
									className="nav-link fs-4 fw-bold"
									id="hydrogen-tab"
									data-bs-toggle="tab"
									data-bs-target="#hydrogen"
									type="button"
									role="tab"
									aria-controls="hydrogen"
									aria-selected="false"
									href={HydrogenSlide}>
									2. Hydrogen
								</a>
							</li>
							<li className="nav-item" role="presentation">
								<a
									className="nav-link fs-4 fw-bold"
									id="fuelcell-tab"
									data-bs-toggle="tab"
									data-bs-target="#fuelcell"
									type="button"
									role="tab"
									aria-controls="fuelcell"
									aria-selected="false"
									href="#fuelcell">
									3. Fuel Cell / Platform
								</a>
							</li>
							<li className="nav-item" role="presentation">
								<a
									className="nav-link fs-4 fw-bold"
									id="design-tab"
									data-bs-toggle="tab"
									data-bs-target="#design"
									type="button"
									role="tab"
									aria-controls="design"
									aria-selected="false"
									href="#design">
									4. Design
								</a>
							</li>
							<li className="nav-item" role="presentation">
								<a
									className="nav-link fs-4 fw-bold"
									id="contact-tab"
									data-bs-toggle="tab"
									data-bs-target="#contact"
									type="button"
									role="tab"
									aria-controls="contact"
									aria-selected="false"
									href="#Contact">
									5. Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>

		{/* <!-- Tab panes --> */}
		<div className="tab-content">
			<div
				className="tab-pane fade show active"
				id="philosophy"
				role="tabpanel"
				aria-labelledby="philosophy-tab">
				<PhilosophySlide />
			</div>
			<div
				className="tab-pane fade"
				id="hydrogen"
				role="tabpanel"
				aria-labelledby="hydrogen-tab">
				<HydrogenSlide />
			</div>
			<div
				className="tab-pane fade"
				id="fuelcell"
				role="tabpanel"
				aria-labelledby="fuelcell-tab">
				<CellFuelSlide />
			</div>{" "}
			<div
				className="tab-pane fade"
				id="design"
				role="tabpanel"
				aria-labelledby="design-tab">
				<DesignOne />
			</div>
			<div
				className="tab-pane fade"
				id="contact"
				role="tabpanel"
				aria-labelledby="contact-tab">
				...
			</div>
		</div>
	</>
);

export default NavTabs;