import React, { useState } from "react";
import { Container, Button, Row, Image, Col } from "react-bootstrap";
import "/workspace/react-hello/src/styles/home.scss";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//Se exporta semáforo en el componente Home
export function Home() {
	// Se define hook para cambio de luz
	const [light, setLight] = useState(0);

	// Se establece una constante la cual evalúa mediante una función con un switch evalúa el estado de la luz,
	//según estado retorna el semáforo con la luz encendida, el semáforo se define mediante las clases establecidas
	//en el home.scss (por cierto me quedó bonito! :)
	const handleOnClick = light => {
		switch (light) {
			//estado 0 luz roja encendida
			case 0:
				return (
					<div className="Semaforo">
						<div
							className="Light redOn"
							onClick={() => setLight(0)}></div>
						<div
							className="Light yellowOff"
							onClick={() => setLight(1)}></div>
						<div
							className="Light greenOff"
							onClick={() => setLight(2)}></div>
					</div>
				);
			//estado 1 luz amarilla encendida
			case 1:
				return (
					<div className="Semaforo">
						<div
							className="Light redOff"
							onClick={() => setLight(0)}></div>
						<div
							className="Light yellowOn"
							onClick={() => setLight(1)}></div>
						<div
							className="Light greenOff"
							onClick={() => setLight(2)}></div>
					</div>
				);
			//estado 2 luz verde encendida
			case 2:
				return (
					<div className="Semaforo">
						<div
							className="Light redOff"
							onClick={() => setLight(0)}></div>
						<div
							className="Light yellowOff"
							onClick={() => setLight(1)}></div>
						<div
							className="Light greenOn"
							onClick={() => setLight(2)}></div>
					</div>
				);
			default:
				return (
					<div className="Semaforo">
						<div
							className="Light redOn"
							onClick={() => setLight(0)}></div>
						<div
							className="Light yellowOff"
							onClick={() => setLight(1)}></div>
						<div
							className="Light greenOff"
							onClick={() => setLight(2)}></div>
					</div>
				);
		}
	};

	//retorna el componente
	return (
		<Container className="d-print-block">
			<Row>
				<div className="Poste"></div>
			</Row>
			<Row>{handleOnClick(light)}</Row>
		</Container>
	);
}
