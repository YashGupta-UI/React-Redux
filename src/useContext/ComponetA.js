/*

Context provides a way to pass data through  the component tree wihtout having to pass props down
manually at every level

*/

import React from 'react';
import ComponentB from './ComponentB';

class ComponentA extends React.Component {
	render() {
		return <ComponentB lang={this.props.lang} />;
	}
}

export default ComponentA;
