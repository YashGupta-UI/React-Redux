import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
	render() {
		console.log('INSIDE PURE COMPONENT');
		return <div>PURE COMPONENT {this.props.propName}</div>;
	}
}

export default PureComp;
