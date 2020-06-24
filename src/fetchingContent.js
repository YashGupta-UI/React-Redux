/*

In a real world scenario.
We're probably not going to hard code the information that we're going to have right.
Normally we would probably get it from a back end of some kind some kind of server some kind of database

Learn here how to make a api call on component

*/

import React, { Component } from 'react';

class FetchContent extends Component {
	state = {
		monster: [],
	};

	// lifecycle methods ->Essentially methods that get called at different stages of when component gets
	//                      rendered.

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => this.setState({ monster: data }));
	}

	render() {
		return (
			<div>
				{this.state.monster.map(item => (
					<h2 key={item.id}>{item.name}</h2>
				))}
			</div>
		);
	}
}

export default FetchContent;
