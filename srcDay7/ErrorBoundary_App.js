import React from 'react';
import Hero from './component/Hero';
import ErrorBoundary from './component/ErrorBoundary';

function App() {
	return (
		<div>
			<ErrorBoundary>
				<Hero heroName="Harbola" />
			</ErrorBoundary>
			<ErrorBoundary>
				<Hero heroName="Yash" />
			</ErrorBoundary>
			<ErrorBoundary>
				<Hero heroName="Harshit" />
			</ErrorBoundary>
		</div>
	);
}

export default App;

/*

function App() {
	return (
		<div>
			<ErrorBoundary>
				<Hero heroName="Harbola" />
				<Hero heroName="Yash" />
				<Hero heroName="Harshit" />
			</ErrorBoundary>
		</div>
	);
}

*/
