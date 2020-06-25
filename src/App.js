import React, { Component } from 'react';
import { YashDemo } from './yashDemo.js';

class App extends Component {
	state = {
		monster: [],
		count: 0,
	};

	incrementClick = () => {
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={this.incrementClick}>Increment</button> <br />
				<YashDemo name="yash" age="27" count={this.state.count} />
			</div>
		);
	}
}

export default App;
