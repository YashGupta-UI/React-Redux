import React, { Component } from 'react';
import withCounter from './withCounter';

class ClickCounter extends Component {
	state = {
		name: 'Harbola',
	};

	render() {
		console.log('pehle yeh btao props hai kya', this.props);
		const { incrementChange, count } = this.props;
		return (
			<div>
				<button onClick={incrementChange}>ClickCounter {count}</button>
				<p>{this.state.name}</p>
			</div>
		);
	}
}

export default withCounter(ClickCounter, 5);
