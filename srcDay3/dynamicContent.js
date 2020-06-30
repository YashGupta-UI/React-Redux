/*

Show them console error without key

The reason why we want a unique key is because react needs to know what element it needs to update.
If one of these elements in our array has a value that changes
react is smart enough to know that it only needs to update that element instead of all.
It does not have to re-render all the elements

*/

import React, { Component } from 'react';

class Dynamic extends Component {
	state = {
		monster: [],
	};

	//lifecycle methods -> class based component

	componentDidMount() {
		console.log('Did mount');
		// best place to call for the api
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(result => this.setState({ monster: result }));
	}

	render() {
		console.log('inside render');
		const { monster } = this.state;

		return (
			<div>
				{monster.map(item => (
					<h1 key={item.id}>{item.name}</h1>
				))}
			</div>
		);
	}
}

export default Dynamic;
