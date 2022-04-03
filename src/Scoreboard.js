import React from "react";

export function Scoreboard(props) {
	return (
		<div className="scoreboard">
			<p>Clicks: {props.clicks}</p>
			<p>Time: {props.time}</p>
			<p>CPS: {props.clicks / (10 - props.time)}</p>
		</div>
	);
}
