import React from "react";

import RearCar from "./RearCar.png";

const DesignTwo = () => (
	<div className="carousel-item active">
		<img
			src={RearCar}
			className="d-block w-100"
			alt="Hydrogen Fuel Battery"
		/>
		<div className="carousel-caption d-none d-md-block Cell">
			<h2>Design dynamic</h2>
			<span>
				Drawing its inspiration from water, a founding element, the
				design of Hextasium Mīkini takes the Human-Machine relationship
				to a new dimension.
			</span>
		</div>
	</div>
);

export default DesignTwo;
