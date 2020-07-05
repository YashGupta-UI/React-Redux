import React, { Component } from 'react';
import State from './component/state';
import FunctionClick from './component/functionClick';
import EventBinding from './component/classEvent';
import Parent from './component/parent';

class App extends Component {
	render() {
		return (
			<div>
				{/* <State /> */}
				{/* <FunctionClick /> */}
				{/* <EventBinding /> */}
				<Parent />
			</div>
		);
	}
}

export default App;
