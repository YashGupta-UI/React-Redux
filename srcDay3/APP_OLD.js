/* 

1. By Using the class component we can have the access of the state, state is an object
   A javascript object with properties that we can access at any point inside of our class

2. JSX -> adjacent html -> className -> inspect and show them in DOM -> {javascript expression} ->
   synthetic events

3. Why we use setState can't we do this.state.text = something
    Remember uni-directional data flow of react

You wont allow to set the state without using the setState.
State gets updated using set state and then that change is going to re render the components

*/

import React, { Component } from 'react';
import ClassExample from './classExample';
import Dynamic from './dynamicContent';
import FetchContent from './fetchingContent';
import { FunctionComponent } from './functionalComponent';

class App extends Component {
	constructor() {
		super();

		this.state = {
			text: 'To Change click on the button',
		};
	}

	handleChange = () => {
		this.setState({
			text: 'I am Change',
		});
	};

	// component stats with capital letter in jsx
	// normal html elements starts with their lower letter so we can distinguish between them

	render() {
		const { text } = this.state;
		return (
			<div className="test">
				<ClassExample />
				<FunctionComponent name="harshit" />
				<p>{text}</p>
				<button onClick={() => this.setState({ text: 'Hoho I am badla badla' })}>Click To Change</button>
				{/* <button onClick={this.handleChange}>Click To Change</button> */}
				<Dynamic />

				<FetchContent />
			</div>
		);
	}
}

export default App;
