import React from 'react';
import './App.css';
import FormHandling from './components/FormHandling';
import Fragments from './components/Fragments';
import Table from './components/Table';
import Parent from './components/ParentComp';
import ParentExample from './components/Parent';

function App() {
	return (
		<div className="App">
			{/* <FormHandling /> */}
			{/* <Fragments /> */}
			{/* <Table /> */}
			<Parent />
			{/* <ParentExample /> */}
		</div>
	);
}

export default App;
