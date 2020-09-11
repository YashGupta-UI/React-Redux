// HOC

import React from 'react';

const withCounter = (WrappedComponent, counter) => {
	class HOC extends React.Component {
		state = {
			count: 0,
		};
		incrementChange = () => {
			this.setState(prevState => {
				return {
					count: prevState.count + counter,
				};
			});
		};
		render() {
			return <WrappedComponent count={this.state.count} incrementChange={this.incrementChange} {...this.props} />;
		}
	}
	return HOC;
};

export default withCounter;

// here we create a new component from the original component
