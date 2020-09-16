import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		// fetch('https://jsonplaceholder.typicode.com/posts')
		// 	.then(res => res.json())
		// 	.then(res => console.log('response', res))
		// 	.catch(err => console.log('error', err));

		axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
			console.log('res', res.data);
			setPosts(res.data);
		});
	}, []);

	return (
		<div>
			<ul>
				{posts.map(post => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
}

export default DataFetching;
