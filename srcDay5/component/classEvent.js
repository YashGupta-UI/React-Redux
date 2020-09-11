import React, { Component } from 'react';

class EventBinding extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Harshit',
		};

		this.changeName = this.changeName.bind(this);
		//this.secondHand = this.secondHand.bind(this);
	}

	changeName() {
		this.setState({
			name: 'Harbola',
		});
		console.log('this', this);
	}

	// 1. bind keyword ->  Their is a prob with this approach beacuse with every render it will create
	// a brand new event handler

	//2. Arrow Function in render -> It also have some performance issue

	//3. Arrow Function -> changeName changeName = () => {}

	//4. binding in constructor

	render() {
		return (
			<div>
				<div>{this.state.name}</div>
				<button onClick={this.changeName}>Click</button>
				{/* 1st way => <button onClick={this.changeName.bind(this)}>Click</button> */}
				{/* <button onClick={() => this.changeName()}>Click</button> */}
				{/* <button onClick={this.changeName}>Click</button> */}
			</div>
		);
	}
}

export default EventBinding;
