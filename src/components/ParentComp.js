import React, { Component } from 'react';
import PureComponent from './PureComp';
import RegularComp from './ReagularComp';
import Memo from './Memo';

class Parent extends Component {
	state = {
		name: 'Yash',
	};

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: 'Harbola',
			});
		}, 2000); // setInterval vs setTimeout
	}

	render() {
		console.log('************INSIDE PARENT COMPONENT****************');
		const { name } = this.state;
		return (
			<div>
				{/* <PureComponent propName={name} />
		<RegularComp propName={name} /> */}
				<Memo propsName={name} />
			</div>
		);
	}
}

export default Parent;
