import React from 'react';

class Pandey extends React.Component {
	state = {
		count: 0,
	};

	handleChange = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};

	render() {
		return <button onClick={this.handleChange}>{this.state.count}</button>;
	}
}

export default Pandey;
