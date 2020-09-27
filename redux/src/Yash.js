import React from 'react';
import { connect } from 'react-redux';
import { getData } from './action/getHarbolaState';

class Yash extends React.Component {
	handleClick = () => {
		this.props.getData('Yash Gupta');
	};

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>Change the name</button>
				<h1>{this.props.name}</h1>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		name: state.data,
	};
};

const mapDispatchToProps = dispatch => ({
	getData: data => dispatch(getData(data)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Yash);
