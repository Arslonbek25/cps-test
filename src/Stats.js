import React from "react";

export default function Stats(props) {
	return (
		<div className="scoreboard">
			<div className="time">
				<p>{props.time}</p>
				<span>Timer</span>
			</div>
			<div className="cps">
				<p>{props.cps}</p>
				<span>CPS</span>
			</div>
			<div className="clicks">
				<p>{props.clicks}</p>
				<span>Clicks</span>
			</div>
		</div>
	);
}
