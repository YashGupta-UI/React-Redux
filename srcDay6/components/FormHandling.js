import React, { Component } from 'react';

// controlled component
// uncontrolled component

class FormHandling extends Component {
	state = {
		username: 'Harbola',
		topic: 'react',
	};

	handleSelectChange = e => {
		this.setState({
			topic: e.target.value,
		});
	};

	handleNameChange = event => {
		console.log('event', event);
		this.setState({
			username: event.target.value,
		});
	};

	handleSubmit = e => {
		alert(`${this.state.username} ${this.state.topic}`);
		e.preventDefault();
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label>Username</label>
						<input type="text" value={this.state.username} onChange={this.handleNameChange} />
					</div>

					<div>
						<label>TOPIC</label>
						<select value={this.state.topic} onChange={this.handleSelectChange}>
							<option value="react">React</option>
							<option value="angular">Angular</option>
							<option value="vue">Vue</option>
						</select>
					</div>

					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default FormHandling;
