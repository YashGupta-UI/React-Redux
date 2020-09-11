import React, { Component } from 'react';
import { ClassExample } from './classExample';
import { FunctionComponent } from './functionalComponent';

class App extends Component {
	constructor() {
		super();

		this.state = {
			text: 'Harbola',
			id: 1,
		};
	}

	handleClick = () => {
		this.setState({ text: 'HOHOHOHOHO' });
	};

	render() {
		return (
			<div className="exampleeeee" id="yash">
				<ClassExample />
				{2 + 3}
				<h1>{this.state.text}</h1>
				<button onClick={this.handleClick}>Click Me to change to text harbola </button>
				<FunctionComponent mereMarzi="harshit pandey" myItem={[1, 2, 3]} />
			</div>
		);
	}
}

export default App;

// JSX Limitation

// 1 We need to use the className intead of class coz class is a reserved keyword in react
// 2 Adjacent jsx elements must be enclosed in a wrapper
// 3 In JSX we need to use curly braces {} for the js expression
// 4 Synthetic Events   onclick onchange
