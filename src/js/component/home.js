import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [light, setLight] = useState("red");

	return (
		<div className="container m-2">
			<div className="bg-dark"></div>
			<div className="bg-dark">
				<div className="bg-danger"></div>
				<div className="bg-warning"></div>
				<div className="bg-success"></div>
			</div>
		</div>
	);
}

//   <TrafficLight
//     onRedClick={() => this.setState({ redOn: !this.state.redOn })}
//     onYellowClick={() => this.setState({ yellowOn: !this.state.yellowOn })}
//     onGreenClick={() => this.setState({ greenOn: !this.state.greenOn })}
//     RedOn={this.state.redOn}
//     YellowOn={this.state.yellowOn}
//     GreenOn={this.state.greenOn}
//   />
