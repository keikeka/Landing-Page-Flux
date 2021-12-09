import React from "react";

import FrontCar from "./FrontCar.png";

import "./DesignOne.scss";

const DesignOne = () => (
	<div className="carousel-item active">
		<img
			src={FrontCar}
			className="d-block w-100"
			alt="Hydrogen Fuel Battery"
		/>
		<div className="carousel-caption d-none d-md-block Cell">
			<h2>Design</h2>
			<span>
				Hextasium Mīkini presents sleek and aerodynamic lines, designed
				to offer long-lasting autonomy. Up front, the ascending fuselage
				optimizes fuel cell cooling. The signature lighting is
				reminiscent of the stratification of a hydrogen module and waves
				on the surface of water.
			</span>
		</div>
	</div>
);

export default DesignOne;