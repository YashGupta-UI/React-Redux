import React, { Component } from 'react';

class RegularComp extends Component {
	render() {
		console.log('INSIDE REGULAR COMPONENT');
		return <div>Regular COMPONENT {this.props.propName}</div>;
	}
}

export default RegularComp;
