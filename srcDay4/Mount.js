import React from 'react';

class Mount extends React.Component {
	constructor(props) {
		super(props);

		console.log('constructor');
	}

	componentWillUnmount() {
		// clean up tasks
	}

	componentDidMount() {
		console.log('didmount the mount component');
	}

	componentWillMount() {
		console.log('unmounting the mount component');
	}

	render() {
		console.log('render');
		return <div>Harshit Pandey</div>;
	}
}

export default Mount;
