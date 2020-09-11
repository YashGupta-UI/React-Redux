import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		console.log('Inside constructor');

		this.state = {
			name: 'Yash Gupta',
		};
	}

	// componentWillReceiveProps() {
	// 	console.log('will receive props');
	// }

	// componentWillUnmount() {
	// 	console.log('un mount');
	// }

	componentWillUpdate() {
		console.log('will update');
	}

	shouldComponentUpdate() {
		console.log('in should component update');
		return false;
	}

	componentDidUpdate() {
		console.log('did update');
	}

	componentDidMount() {
		console.log('did mount');
	}

	componentWillMount() {
		console.log('Will Mount');
	}

	handleClick = () => {
		this.setState({ name: 'Harshit Pandey' });
	};

	render() {
		console.log('in render');
		return (
			<div>
				<div>{this.state.name}</div>
				<button onClick={this.handleClick}>Click</button>
			</div>
		);
	}
}

export default App;
