import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching2() {
	const [post, setPost] = useState({});
	const [id, setId] = useState(1);
	const [buttonId, setButtonId] = useState(1);

	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
			setPost(res.data);
		});
	}, [buttonId]);

	const handleClick = () => {
		setButtonId(id);
	};

	return (
		<div>
			<input type="text" value={id} onChange={e => setId(e.target.value)} />
			<button type="button" onClick={handleClick}>
				Fetch Me
			</button>
			<div>{post.title}</div>
		</div>
	);
}

export default DataFetching2;
