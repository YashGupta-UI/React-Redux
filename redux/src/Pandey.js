import React from 'react';
import { connect } from 'react-redux';

class Pandey extends React.Component {
	render() {
		return (
			<div>
				<p>Chulbul Pandey</p>
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

export default connect(mapStateToProps)(Pandey);
