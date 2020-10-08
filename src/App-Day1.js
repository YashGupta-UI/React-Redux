import React, { Component } from 'react';
import RoutingLinks from './components/RoutingLinks';
import Harbola from './components/Harbola';
import Pandey from './components/Pandey';
import { Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div>
				<RoutingLinks />
				<Route path="/" exact component={Harbola} />
				{/* 	<Route path="/" exact render={() => <h1>Harbola</h1>} /> */}
				<Route path="/new-blog" component={Pandey} />
				<Route path="/navlink" render={() => <h1>Test for NavLink</h1>} />
			</div>
		);
	}
}

export default App;
