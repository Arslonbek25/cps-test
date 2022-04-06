import React, { useState, useEffect, useRef } from "react";
import { Clicker } from "./Clicker";
import { Scoreboard } from "./Scoreboard";

export function App() {
	const defaultTime = 3;

	const [clicks, setClicks] = useState(0);
	const [time, setTime] = useState(defaultTime);

	let started = useRef(false);

	function handleClick() {
		if (time > 0) started.current = true;
		if (time > 0 && started.current) setClicks(clicks + 1);
		else started.current = false;
	}

	function restart() {
		if (started.current) return;
		setTime(defaultTime);
		setClicks(0);
	}

	function handleTimer() {
		if (time > 0 && started.current) {
			setTime((prevTime) => (prevTime - 0.1).toFixed(1));
		}
	}

	useEffect(() => {
		const timer = setTimeout(handleTimer, 100);
		return () => clearTimeout(timer);
	}, [started.current, time]);

	return (
		<>
			<Scoreboard clicks={clicks} time={time} defaultTime={defaultTime} />
			<Clicker click={() => handleClick()} restart={() => restart()} />
		</>
	);
}
