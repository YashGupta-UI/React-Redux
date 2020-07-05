import React, { PureComponent } from 'react';
import PureComp from './PureComp';
import RegularComp from './ReagularComp';
import Memo from './Memo';

class ParentExample extends PureComponent {
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
				<PureComp propName={name} />
				<RegularComp propName={name} />
			</div>
		);
	}
}

export default ParentExample;
