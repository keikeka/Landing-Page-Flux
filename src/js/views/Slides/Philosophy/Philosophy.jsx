import React from "react";

import PhilosophyHex from "../Philosophy/Philosophy.png";

const PhilosophySlide = () => {
	return (
		<>
			<div className="carousel-item active">
				<img src={PhilosophyHex} className="d-block w-100" alt="Vehicle powered by hydrogen" />
				<div className="carousel-caption d-none d-md-block">
					<h2>Hydrogen. Innovation. Technology. Performance</h2>
					<span>
						<p>
							Drawing its values from the DNA of motor racing, Hextasium imagines the first high-end
							vehicle powered by hydrogen. True technological feat, Hextasium Mikini promises a neutral
							carbon footprint, exceptional autonomy and a record-breaking charging time.
						</p>
					</span>
				</div>
			</div>
		</>
	);
};

export default PhilosophySlide;
