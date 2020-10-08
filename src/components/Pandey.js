import React from 'react';
import { Redirect } from 'react-router-dom';

class Pandey extends React.Component {
	state = {
		submit: false,
	};

	handleChange = () => {
		this.setState({
			submit: true,
		});
		//this.props.history.push('/');

		//this.props.history.replace('/');
	};

	render() {
		// let redirect = null;
		// if (this.state.submit) {
		// 	redirect = <Redirect to="/" />;
		// }
		return (
			<div>
				<h1>Harshit Pandey</h1>
				<button onClick={this.handleChange}>Back to Home</button>
			</div>
		);
	}
}

export default Pandey;
