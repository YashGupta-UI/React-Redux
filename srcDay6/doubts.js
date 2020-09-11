import React, { Component } from 'react';

class Example extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};
		console.log('props in constructor', this.props);
	}

	componentWillMount() {
		console.log(' will mount this.props', this.props);
	}

	componentDidMount() {
		console.log('did mount this.props', this.props);
	}

	handleClick = () => {
		console.log('props in handleCLick', this.props);
		console.log('state in compoenny', this.state);
	};

	render() {
		console.log('in render props', this.props);
		return <button onClick={this.handleClick}>BOLA</button>;
	}
}

export default Example;
