import React, { Component } from 'react';

class State extends Component {
	state = {
		count: 0,
		pandey: '',
	};

	increment = () => {
		//this.state.count = this.state.count + 1;
		// this.setState({ count: this.state.count + 1 }, () => {
		// 	console.log('state', this.state.count);
		// });

		this.setState({ count: this.state.count + 1 });

		this.setState(prevState => ({
			count: prevState.count + 1,
		}));
		console.log('state', this.state.count);
	};

	incrementFive = () => {
		this.increment(); // 1
		this.increment(); //
		// this.increment(); //
		// this.increment(); //
		// this.increment(); //
	};

	render() {
		return (
			<div>
				<div>Count:{this.state.count}</div>
				<button onClick={this.incrementFive}>Click</button>
			</div>
		);
	}
}

export default State;
