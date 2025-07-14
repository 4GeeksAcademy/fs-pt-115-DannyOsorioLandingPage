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

			<Nav />
			<Jumbotron />
			<div className="row">
				<Card
					title="Monkey D. Luffy"
					text="Voy a ser el rey de los piratas"
					link="https://es.wikipedia.org/wiki/Monkey_D._Luffy"
					img="https://ih1.redbubble.net/image.4986304710.4607/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
				/>
				<Card
					title="Roronoa Zoro"
					text="Santoriu"
					link="https://es.wikipedia.org/wiki/Piratas_de_Sombrero_de_Paja#Roronoa_Zoro"
					img="https://www.nuclearblast.com/cdn/shop/files/abydco484_lg_d893d0e1-8d42-483f-bb8a-312b608cf4e1.jpg?v=1750089036"
				/>
				<Card
					title="Vinsmoke Sanji"
					text="Nunca golpeare a una mujer!!!"
					link="https://es.wikipedia.org/wiki/Piratas_de_Sombrero_de_Paja#Sanji"
					img="https://www.yourdecoration.es/cdn/shop/files/Poster-One-Piece-Wanted-Sanji-Wano-61x91-5cm-GBYDCO620.jpg?v=1739864595"
				/>
				<Card
					title="Gol D. Roger"
					text="Busquen el One Piece"
					link="https://es.wikipedia.org/wiki/Anexo:Piratas_de_One_Piece#Gold_Roger"
					img="https://static.wikia.nocookie.net/onepiece/images/4/4c/Cartel_de_recompensa_de_Gol_D._Roger.png/revision/latest?cb=20210208204702&path-prefix=es"
				/>
			</div>
			<Footer />

		</div>

	);
};

export default Home;