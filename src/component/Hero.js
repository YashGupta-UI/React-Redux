import React from 'react';

function Hero({ heroName }) {
	if (heroName === 'Harshit') {
		throw new Error('Fuck you dude');
	}
	return <div>{heroName}</div>;
}

export default Hero;

// adds in app.js for error boundary
