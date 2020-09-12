import React, { Component } from 'react';

class MousePosition extends Component {
	state = {
		x: 0,
		y: 0,
	};

	logMousePosition = e => {
		console.log('event', e);
		this.setState({
			x: e.clientX,
			y: e.clientY,
		});
	};

	componentDidMount() {
		window.addEventListener('mousemove', this.logMousePosition);
	}

	render() {
		return (
			<div>
				X- {this.state.x} Y-{this.state.y}
			</div>
		);
	}
}

export default MousePosition;
