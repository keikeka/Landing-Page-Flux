import React from "react";

const CarControlButtons = () => (
	<>
		<button
			className="carousel-control-prev  "
			type="button"
			data-bs-target="#carouselExampleCaptions"
			data-bs-slide="prev">
			<span
				className="carousel-control-prev-icon  bg-transparent"
				aria-hidden="true"></span>
			<span className="visually-hidden">Previous</span>
		</button>
		<button
			className="carousel-control-next  "
			type="button"
			data-bs-target="#carouselExampleCaptions"
			data-bs-slide="next">
			<span
				className="carousel-control-next-icon  bg-transparent"
				aria-hidden="true"></span>
			<span className="visually-hidden">Next</span>
		</button>
	</>
);

export default CarControlButtons;