import React from "react";

import HydrogenImage from "./HydrogenImage.png";

const HydrogenSlide = () => {
	return (
		<>
			<div className="carousel-item">
				<img src={HydrogenImage} className="d-block w-10" alt="Hydrogen energy transition" />
				<div className="carousel-caption d-none d-md-block">
					<h2>Hydrogen</h2>
					<span>
						<p>
							Hydrogen is a source of life, the lightest element in the world and an abundant natural
							resource. At the service of mankind for many years, hydrogen is a safe and stable element,
							approved by Science and a synonym of progress. Herald of the energy transition, hydrogen is
							the future of the world.
						</p>
					</span>
				</div>
			</div>
		</>
	);
};

export default HydrogenSlide;
