import React from "react";

export function Clicker(props) {
	return (
		<>
			<button onClick={props.click}>Click</button>
		</>
	);
}