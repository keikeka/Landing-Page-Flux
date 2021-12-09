import React from "react";
import { Link } from "react-router-dom";

const Carousel = () => (	
	<>
		<div className="text-center mt-5 Slide aling-top">
						
			<div
				id="carouselExampleCaptions"
				className="carousel slide carousel-fade "
				data-bs-ride="carousel"
				data-bs-interval="false">
				{/* Carousel Buttons Indicators */}
				<CarouselButIndicators />

				{/**
				 * Main Carousel
				 */}
				<div className="carousel-inner">
					{/* TODO:First item */}
					<PhilosophySlide />
					{/* TODO:Second item */}
					<HydrogenSlide />
					{/* TODO:Third item */}
					<CellFuelSlide />
					{/* Fourth item */}
					<PlatConVisionSlide />
					{/* Fifth item */}
					{/* Sixth item */}
					<div className="carousel-item">
						<img
							src={Car}
							className="d-block w-100"
							alt="Hydrogen battery on car's chasis"
						/>
						<div className="carousel-caption d-none d-md-block"></div>
					</div>
					{/* TODO:Seventh item */}
					{/* Last item */}
					<div className="carousel-item">
						<Footer />

						{/* <div className="carousel-caption d-none d-md-block Plat"></div> */}
					</div>
				</div>
				{/**
				 * Control buttons
				 */}
				<CarControlButtons />
			</div>
		</div>
	</>
);

export default Carousel;