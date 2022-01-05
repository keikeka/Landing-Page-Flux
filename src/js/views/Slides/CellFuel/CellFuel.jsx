import React from "react";

import Battery from "./Battery.png";

import "./CellFuel.scss";

const CellFuelSlide = () => (
	<div className="carousel-item active">
		<img src={Battery} className="d-block w-100" alt="Hydrogen Fuel Battery" />
		<div className="carousel-caption d-none d-md-block Cell">
			<h2>Cell Fuel System</h2>
			<span>
				<p>
					The fuel cell system transforms air and hydrogen into energy, two elements that are found abundantly
					in nature. Beyond the electricity generated to power the vehicle, the fuel cell emits nothing but
					<b>water</b>. A High Technology Manufacturer, Hextasium is the first automotive company to develop a
					fuel cell offering exceptional performances in a high-end vehicle.
				</p>

				<p>
					However, the system for efficiently and rapidly extracting hydrogen from nature is highly polluting.
					For to date, 95% of hydrogen is still produced by fossil fuels, because the cleanest system,
					depending on the source of the electrivity, is electrolysis, which is expensive and highly
					inefficient.
				</p>
			</span>
		</div>
	</div>
);

export default CellFuelSlide;
