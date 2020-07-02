import React from 'react';

export const Child = props => {
	console.log('props', props);
	return (
		<div>
			<button onClick={props.greetHandler}>GreetMe</button>
			<button onClick={() => props.harbolaFunction('yash')}>Harbola Function Ko Call Karo</button>
		</div>
	);
};
