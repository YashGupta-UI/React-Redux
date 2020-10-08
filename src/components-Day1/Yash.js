import React from 'react';
import { withRouter } from 'react-router-dom';

class Yash extends React.Component {
	componentDidMount() {
		console.log('router props yash', this.props);
	}
	render() {
		return <h1>Yash Gupta</h1>;
	}
}

export default withRouter(Yash);
