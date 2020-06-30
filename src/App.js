import React, { Component } from 'react';
import CardList from './components/card-list/cardList';

class App extends Component {
	state = {
		monster: [],
		searchText: '',
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(response => this.setState({ monster: response }));
	}

	render() {
		return (
			<div>
				<h1>MONSTER APP</h1>
				<CardList monster={this.state.monster} />
			</div>
		);
	}
}

export default App;
