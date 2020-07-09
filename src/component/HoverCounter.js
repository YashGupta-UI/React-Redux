import React, { Component } from 'react';
import withCounter from './withCounter';

class HoverCounter extends Component {
	render() {
		const { count, incrementChange } = this.props;
		return (
			<div>
				<h1 onMouseOver={incrementChange}>HoverCounter {count}</h1>
			</div>
		);
	}
}

export default withCounter(HoverCounter, 10);
