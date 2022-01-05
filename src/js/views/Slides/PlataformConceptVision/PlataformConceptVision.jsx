import React from "react";

import Skelleton from "./SkelletonWithBattery.png";

import "./PlataformConceptVision.scss";

const PlatConVisionSlide = () => (
	<div className="carousel-item">
		<img src={Skelleton} className="d-flex w-100" alt="Hydrogen battery on car's chasis" />
		<div className="carousel-caption d-none d-md-block Plat">
			<h2>Plataform Concept Vision</h2>
			<p>
				The platform has been designed to achieve an unparalleled level of performance: delivering over 500
				horsepower, a top speed of 230 km/h (143 mph), and a range of 1,000 km + (620 miles +) for a filling
				time of only
				<b> 3 </b>
				minutes. These technical feats are made possible by a set of innovations and the harmonious
				stratification of the different components of the platform.
			</p>
		</div>
	</div>
);

export default PlatConVisionSlide;
