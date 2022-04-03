import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Clicker } from "./Clicker";
import { Scoreboard } from "./Scoreboard";
import "./style.css";

function App() {
	const [clicks, setClicks] = useState(0);
	const [time, setTime] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			if (time > 0) setTime((time - 0.1).toFixed(1));
		}, 100);
		return () => clearInterval(timer);
	}, [time]);

	function handleClick() {
		if (time) return () => setClicks(clicks + 1);
		return () => {
			setTime(10);
			setClicks(0);
		};
	}

	return (
		<>
			<Scoreboard clicks={clicks} time={time} />
			<Clicker click={handleClick()} />
		</>
	);
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
