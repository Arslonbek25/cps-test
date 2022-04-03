import React from "react";

export function Scoreboard(props) {
	function getCPS() {
		let number = props.clicks / (10 - props.time);
		if (isNaN(number)) return 0;
		return number.toFixed(1);
	}

	return (
		<div className="scoreboard">
			<p>Clicks: {props.clicks}</p>
			<p>Time: {props.time}</p>
			<p>CPS: {getCPS()}</p>
		</div>
	);
}
