import React from 'react';
import { Harbola as Test } from './harbola'; // alias
import Pandey from './pandey';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div>React Yash</div>
				<Test />
				<Pandey />
			</header>
		</div>
	);
}

export default App;
