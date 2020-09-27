import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from './action/getHarbolaState';

class Harbola extends Component {
	state = {
		name: 'vaibhav harbola',
	};

	handleClick = () => {
		// action dispatch here
		this.props.getData(this.state.name);
	};

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>Dispatch The Action </button>
				<h4>{this.props.pandey}</h4>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	getData: data => dispatch(getData(data)),
});

const mapStateToProps = store => {
	return {
		pandey: store.data,
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Harbola);

// If you want to dispatch any action or retrieve some data from the store so you need to connect the redux

// connect -> 2 argument -> mapStateToProps, mapDispatchToProps
