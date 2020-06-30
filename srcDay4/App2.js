import React, { Component } from 'react';
import Child from './Child';

class App extends Component {
	constructor(props) {
		super(props);
		console.log('app Inside constructor');

		this.state = {
			name: 'Yash Gupta',
		};
	}

	componentWillUpdate() {
		console.log('app will update');
	}

	shouldComponentUpdate() {
		console.log('app in should component update');
		return true;
	}

	componentDidUpdate() {
		console.log('App did update');
	}

	componentDidMount() {
		console.log('App did mount');
	}

	componentWillMount() {
		console.log('App Will Mount');
	}

	handleClick = () => {
		this.setState({ name: 'Harshit Pandey' });
	};

	render() {
		console.log('app in render');
		return (
			<div>
				<button onClick={this.handleClick}>Click</button>
				<Child name={this.state.name} />
			</div>
		);
	}
}

export default App;
