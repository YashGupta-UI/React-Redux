import React from 'react';
import Mount from './Mount';

class App extends React.Component {
	state = {
		isAuth: false,
	};

	myhandleClick = () => {
		this.setState({
			isAuth: !this.state.isAuth,
		});
	};

	render() {
		return (
			<div>
				<button onClick={this.myhandleClick}>Click Me</button>
				{this.state.isAuth ? <Mount /> : null}
			</div>
		);
	}
}

export default App;
