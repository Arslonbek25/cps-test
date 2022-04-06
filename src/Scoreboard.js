import React from "react";

export function Scoreboard(props) {
	function getCPS() {
		const cps = parseFloat((props.clicks / (props.defaultTime - props.time)).toFixed(2));
		const isValidCPS = (n) => (isNaN(n) || n === Infinity ? "0.00" : n);

		return isValidCPS(cps);
	}

	return (
		<div className="scoreboard">
			<p>Time: {props.time}</p>
			<p>CPS: {getCPS()}</p>
			<p>Clicks: {props.clicks}</p>
		</div>
	);
}
