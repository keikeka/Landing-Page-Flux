import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to="/navbar" />
				</li>
				<li>
					<Link to="/philosophy">Philosophy</Link>
				</li>
			</ul>
		</div>
	);
};

export default Home;
