import React from 'react';

export const Child = props => {
	console.log('props', props);
	let yash = {
		name: 'yash',
		age: 27,
	};

	return (
		<div>
			<button onClick={props.greetHandler}>GreetMe</button>
			<button onClick={() => props.harbolaFunction('yash')}>Harbola Function Ko Call Karo</button>
		</div>
	);
};

// react 2 main feature -> virtual dom , unidirectional data flow
