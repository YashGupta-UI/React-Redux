import React from 'react';
import { Link } from 'react-router-dom';

class Badola extends React.Component {
	render() {
		return (
			<div>
				<p>Badola</p>
				<button>
					<Link to="harbola">Click to go back</Link>
				</button>
			</div>
		);
	}
}

export default Badola;
