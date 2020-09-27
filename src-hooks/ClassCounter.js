import React from 'react';

export class ClassCounter extends React.Component {
	state = {
		count: 0,
		data: [],
	};

	countHandler = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};
	render() {
		const { count } = this.state;
		return (
			<div>
				<button onClick={this.countHandler}>Class {count}</button>
			</div>
		);
	}
}
