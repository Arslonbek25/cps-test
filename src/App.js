import React, { useState, useEffect, useRef } from "react";
import { Clicker } from "./Clicker";
import Stats from "./Stats";

export function App() {
	const defaultTime = 3;

	const [clicks, setClicks] = useState(0);
	const [time, setTime] = useState(defaultTime);
	const [score, setScore] = useState();

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
		if (time > 0 && started.current) setTime((prevTime) => (prevTime - 0.1).toFixed(1));
		else {
			started.current = false;
			setScore(
				!started.current &&
					clicks > 0 &&
					`Your CPS result is ${getCPS()} (${clicks} Clicks in ${defaultTime} Seconds)`
			);
		}
	}

	function getCPS() {
		const cps = parseFloat((clicks / (defaultTime - time)).toFixed(2));
		const isValidCPS = (n) => (isNaN(n) || n === Infinity ? "0.00" : n);

		return isValidCPS(cps);
	}

	useEffect(() => {
		console.log(score);
		const timer = setTimeout(handleTimer, 100);
		return () => clearTimeout(timer);
	}, [started.current, time]);

	return (
		<>
			<Stats clicks={clicks} time={time} cps={getCPS()} />
			<Clicker click={() => handleClick()} restart={() => restart()} score={score} />
		</>
	);
}
