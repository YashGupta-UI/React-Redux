import React from 'react';

function Columns() {
	const items = [];
	return (
		<React.Fragment>
			<td>Name</td>
			<td>Yash</td>
		</React.Fragment>
	);
}

export default Columns;

// check with parent div

/*

	{items.map((item, id) => {
			return(	<React.Fragment key={id}>
					<h1>{item.title}</h1>
					<p>{item.id}</p>
				</React.Fragment>;
			)})}




*/
