import React, { Component } from 'react';
import './RoutingLink.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class RoutingLinks extends Component {
	render() {
		return (
			<header>
				<ul>
					<li>
						<Link to="/" exact>
							Home
						</Link>
					</li>
					<li>
						<Link to="/new-blog">New Blog</Link>
					</li>

					<li>
						<NavLink
							to="/navlink"
							activeClassName="harbola-class"
							activeStyle={{
								color: 'green',
							}}
						>
							Navlink
						</NavLink>
					</li>
				</ul>
			</header>
		);
	}
}

export default RoutingLinks;

{
	/*


<ul>
					<li>
						<NavLink to="/" exact>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/new-blog">New Blog</NavLink>
					</li>

					<li>
						<NavLink to="/navlink">Navlink</NavLink>
					</li>
				</ul>


*/
}

/*
It loads different URLs as you can see in the URL bar,
but it doesn't affect our application.

Actually it always returns to same page.
This is related to the way our development server is set up and your production server should also
be set up.

It always returns the index.html file for every route because for the server, there are no different
routes, there is only one single file it has return all the time.

It's now about parsing that URL in the client.
This is what we'll start working on next by adding the router package and setting up different routes.

*/
