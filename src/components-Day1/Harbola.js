import React from 'react';
import Yash from './Yash';

class Harbola extends React.Component {
	componentDidMount() {
		console.log('router props harbola', this.props);
	}
	render() {
		return (
			<div>
				<h1>Vaibhav Harbola</h1>
				{/* <Yash {...this.props} /> */}
				<Yash />
			</div>
		);
	}
}

export default Harbola;
