import React from "react";

export function Scoreboard(props) {
	function getCPS() {
		const cps = parseFloat((props.clicks / (props.defaultTime - props.time)).toFixed(2));
		const isValidCPS = (n) => (isNaN(n) || n === Infinity ? "0.00" : n);

		return isValidCPS(cps);
	}

	return (
		<div className="scoreboard">
			<div className="time">
				<p>{props.time}</p>
				<span>Timer</span>
			</div>
			<div className="cps">
				<p>{getCPS()}</p>
				<span>CPS</span>
			</div>
			<div className="clicks">
				<p>{props.clicks}</p>
				<span>Clicks</span>
			</div>
		</div>
	);
}
