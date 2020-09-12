import React, { useState, useEffect } from 'react';

export function HookClassMouse() {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	const logMousePosition = e => {
		console.log('mouse event');
		setX(e.clientX);
		setY(e.clientY);
	};

	useEffect(() => {
		console.log('use effect called');
		window.addEventListener('mousemove', logMousePosition);

		return () => {
			// clean up task
			console.log('useEffect componentWillUnMount');
			window.removeEventListener('mousemove', logMousePosition);
		};
	}, []);

	return (
		<div>
			Hooks X-{x} Y-{y}
		</div>
	);
}
