import React from "react";

export function Clicker(props) {
	return (
		<div className="clicker">
			<p className="score">{props.score}</p>
			<button onClick={props.click} className="click">
				Click
			</button>
			<button onClick={props.restart} className="restart">
				Restart
			</button>
		</div>
	);
}
