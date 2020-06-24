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
		monster: [
			{
				id: 100,
				name: 'Zombie',
			},
			{
				id: 200,
				name: 'Dracula',
			},
			{
				id: 300,
				name: 'Harbola',
			},
		],
	};

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

export default Dynamic;
