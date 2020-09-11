import React, { useState } from 'react';

function HookCounter() {
	const [count, setCount] = useState(1);
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Click Me Hook {count}</button>
		</div>
	);
}

export default HookCounter;
