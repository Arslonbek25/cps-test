import React from "react";

export function Scoreboard(props) {
	function getCPS() {
		const cps = parseFloat((props.clicks / (3 - props.time)).toFixed(1));
		const isValidCPS = (n) => (isNaN(n) || n === Infinity ? "0.0" : n);

		return isValidCPS(cps);
	}

	return (
		<div className="scoreboard">
			<p>Clicks: {props.clicks}</p>
			<p>Time: {props.time}</p>
			<p>CPS: {getCPS()}</p>
		</div>
	);
}
