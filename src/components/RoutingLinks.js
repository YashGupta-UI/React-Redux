import React, { Component } from 'react';
import './RoutingLinks.css';
import { Link } from 'react-router-dom';

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
						<Link to="/newBlog">New Blog</Link>
					</li>

					<li>
						<Link to="/newBlog/1">New Blog 1</Link>
					</li>

					<li>
						<Link to="/yash">Yash</Link>
					</li>
				</ul>
			</header>
		);
	}
}

export default RoutingLinks;
