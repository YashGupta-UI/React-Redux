import React, { Component } from 'react';
import { Child } from './child';

class Parent extends Component {
	state = {
		parentName: 'BOBBYYYYY',
	};

	greetMe = () => {
		alert(`Hey ${this.state.parentName}`);
	};

	harbolaWithArgument = name => {
		alert(name);
	};

	render() {
		return (
			<div>
				{/* <button onClick={this.greetMe}>Click</button> */}
				<Child greetHandler={this.greetMe} harbolaFunction={this.harbolaWithArgument} />
			</div>
		);
	}
}

export default Parent;
