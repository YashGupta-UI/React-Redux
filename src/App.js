import React, { Component } from 'react';
import Harbola from './components/Harbola';
import Badola from './components/Badola';
import Pandey from './components/Pandey';
import { Route, Link, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
	render() {
		console.log('props', this.props);
		return (
			<div>
				<ul>
					<li>
						<Link to="/harbaola">Harbola</Link>
					</li>
					<li>
						<Link to="/pandey">Pandey</Link>
					</li>
					<li>
						<Link to="/badola">Badola</Link>
					</li>
				</ul>

				{/*<Route path="/harbaola" render={() => <h1>HUHUHUHUHUH</h1>} /> */}
				<Route path="/" exact render={() => <h1>Welcome</h1>} />
				<Route path="/product" component={Harbola} />
				<Route path="/pandey" component={Pandey} />
				<Route path="/badola" component={Badola} />
				<Redirect to="/badola" />
			</div>
		);
	}
}

export default App;
