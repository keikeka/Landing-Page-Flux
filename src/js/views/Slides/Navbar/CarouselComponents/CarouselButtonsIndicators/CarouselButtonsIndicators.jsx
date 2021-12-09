import React from "react";

import "./CarouselButtonsIndicators.scss";

const CarouselBtnIndicators = () => (
	<div className="carousel-indicators">
		<button
			type="button"
			data-bs-target="#carouselExampleCaptions"
			data-bs-slide-to="0"
			className="active"
			aria-current="true"
			aria-label="Slide 1"></button>
		<button
			type="button"
			data-bs-target="#carouselExampleCaptions"
			data-bs-slide-to="1"
			aria-label="Slide 2"></button>
		<button
			type="button"
			data-bs-target="#carouselExampleCaptions"
			data-bs-slide-to="2"
			aria-label="Slide 3"></button>
		<button
			type="button"
			data-bs-target="#carouselExampleCaptions"
			data-bs-slide-to="3"
			aria-label="Slide 4"></button>
		<button
			type="button"
			data-bs-target="#carouselExampleCaptions"
			data-bs-slide-to="4"
			aria-label="Slide 5"></button>
		<button
			type="button"
			data-bs-target="#carouselExampleCaptions"
			data-bs-slide-to="5"
			aria-label="Slide 6"></button>
	</div>
);

export default CarouselBtnIndicators;
