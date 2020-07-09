// lifecycle methods

// 1. static getDerivedStateFromError(error)
// 2. componentDidCatch(error, info)

// A class component that implements either one or both of the lifecycle methods are called error boundary

import React, { Component } from 'react';

class ErrorBoundary extends Component {
	state = {
		hasError: false,
	};

	componentDidCatch(error) {
		this.setState({
			hasError: true,
		});
	}

	render() {
		console.log('this props children', this.props.children);
		if (this.state.hasError) {
			return <h1> Something Went Wrong Baby</h1>;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;

// It can catch the error in the render, lifecyclemethods or in the constructor.
// it doesnt catch error in eventHandler use the normal try catch in that case

// It will throw you an error on local as react team intentialy wants you to see the error in local
// but in upper env it will work fine so in dev user the close mark and see the fallback ui
