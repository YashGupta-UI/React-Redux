import React from 'react';
import { getUserData } from './action/getUserData';
import { connect } from 'react-redux';

class AsynData extends React.Component {
	componentDidMount() {
		this.props.dispatch(getUserData('https://jsonplaceholder.typicode.com/todos/1'));
	}

	render() {
		return (
			<div>
				<h1>ASYN DATA</h1>
				{this.props.mydata.title}
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log('state of our store', state);
	return {
		mydata: state.getUserInfo.apiData,
	};
};

export default connect(mapStateToProps)(AsynData);
