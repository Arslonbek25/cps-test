import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { Clicker } from "./Clicker";
import { Scoreboard } from "./Scoreboard";
import "./style.css";

function App() {
	const [clicks, setClicks] = useState(0);
	const [time, setTime] = useState(3);

	let started = useRef(false);

	function handleClick() {
		if (time > 0) started.current = true;
		if (time > 0 && started.current) setClicks(clicks + 1);
		else started.current = false;
	}

	function restart() {
		if (started.current) return;
		setTime(3);
		setClicks(0);
	}

	useEffect(() => {
		function handleTimer() {
			if (time > 0 && started.current) {
				setTime((prevTime) => (prevTime - 0.1).toFixed(1));
			}
		}
		const timer = setTimeout(handleTimer, 100);
		return () => clearTimeout(timer);
	}, [started.current, time]);

	return (
		<>
			<Scoreboard clicks={clicks} time={time} />
			<Clicker click={() => handleClick()} restart={() => restart()} />
		</>
	);
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
