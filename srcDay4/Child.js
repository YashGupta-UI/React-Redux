import React, { Component } from 'react';

class Child extends Component {
	constructor(props) {
		super(props);
		console.log('Inside child constructor');
	}

	componentWillReceiveProps() {
		console.log('child willreceiveprops');
	}

	componentWillUpdate() {
		console.log(' child will update');
	}

	shouldComponentUpdate() {
		console.log('child in should component update');
		return true;
	}

	componentDidUpdate() {
		console.log('child did update');
	}

	componentDidMount() {
		console.log('child did mount');
	}

	componentWillMount() {
		console.log('child Will Mount');
	}

	render() {
		console.log('child in render');
		return (
			<div>
				<h1>{this.props.name}</h1>
			</div>
		);
	}
}

export default Child;
