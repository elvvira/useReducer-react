import { useState } from 'react';

const App = () => {
	const { incrementar, decrementar, incrementarStep, reset, counter } =
		useCounter();

	return (
		<div>
			<h1>useReducer example</h1>
			<h1>
				Value: <span>{counter.value}</span>
			</h1>
			<h1>
				Step: <span>{counter.step}</span>
			</h1>
			<h1>
				Clicks: <span>{counter.click}</span>
			</h1>
			<div>
				<button onClick={incrementar}>Incrementar</button>
				<button onClick={decrementar}>Decrementar</button>
				<button onClick={incrementarStep}>Incrementar Step</button>
				<button onClick={reset}>Reset</button>
			</div>
		</div>
	);
};

const useCounter = () => {
	const [counter, setCounter] = useState({
		value: 0,
		step: 1,
		click: 0
	});

	const incrementar = () => {
		setCounter({
			...counter,
			value: counter.value + counter.step,
			click: counter.click + 1
		});
	};

	const decrementar = () => {
		setCounter({
			...counter,
			value: counter.value - 1,
			click: counter.click + 1
		});
	};

	const incrementarStep = () => {
		setCounter({
			...counter,
			step: counter.step + 1
		});
	};

	const reset = () => {
		setCounter({
			value: 0,
			click: 0,
			step: 1
		});
	};
	return {
		incrementar,
		decrementar,
		incrementarStep,
		reset,
		counter
	};
};

export default App;
