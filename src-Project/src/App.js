import React from 'react';
import './App.css';
import CardList from './components/cardList/cardList';
import Search from './components/search/search';

class App extends React.Component {
	state = {
		monster: [],
		searchText: '',
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(response => this.setState({ monster: response }));
	}

	handleSearch = e => {
		this.setState({ searchText: e.target.value });
	};

	render() {
		const { monster, searchText } = this.state;

		const filteredMonster = monster.filter(monster =>
			monster.name.toLowerCase().includes(searchText.toLowerCase())
		);

		console.log('Filtered Monster', filteredMonster);

		return (
			<div className="App">
				<h1>Monster Cartoons</h1>
				<Search placeholder="search monster" handleChange={this.handleSearch} />
				<CardList monster={filteredMonster} />
			</div>
		);
	}
}

export default App;
