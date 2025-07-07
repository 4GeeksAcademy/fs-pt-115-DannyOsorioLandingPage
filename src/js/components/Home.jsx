import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Nav } from "./Nav";
import { Jumbotron } from "./Jumbotron";
import { Footer } from "./Footer";
import { Card } from "./Card";

//create your first component
const Home = () => {
	return (
		<div className="container-md">
			<Nav/>
			<Jumbotron/>
			<Card/>
			<Footer/>
		</div>

	);
};

export default Home;