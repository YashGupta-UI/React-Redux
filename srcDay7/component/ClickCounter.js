import React, { Component } from 'react';
import withCounter from './withCounter';

class ClickCounter extends Component {
	render() {
		const { incrementChange, count, age, hoho } = this.props;
		return (
			<div>
				<button onClick={incrementChange}>
					ClickCounter {count} {age} {hoho}
				</button>
			</div>
		);
	}
}

export default withCounter(ClickCounter, 5);
