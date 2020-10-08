import React, { Component } from 'react';
import RoutingLinks from './components/RoutingLinks';
import Harbola from './components/Harbola';
import Pandey from './components/Pandey';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div>
				<RoutingLinks />
				<Switch>
					<Redirect from="/yash" to="/" />
					<Route path="/newBlog/1" render={() => <p>Product</p>} />
					<Route path="/newBlog" component={Pandey} />
					<Route path="/yash" render={() => <p>broken Link</p>} />
					<Route path="/" exact component={Harbola} />
				</Switch>
			</div>
		);
	}
}

export default App;

/*
    <Route path="/navlink" render={() => <h1>Test for NavLink</h1>} />
    

    Switch -> ensure only one router will match at one time

    What will be the difference between exact and switch?
    push/replace/Redirect

*/
