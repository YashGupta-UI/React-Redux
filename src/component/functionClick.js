import React from 'react';

function FunctionClick() {
	function clickHandler() {
		console.log('hehehe');
	}

	return (
		<div>
			<div>Yash</div>
			<button onClick={clickHandler}>Click</button>
		</div>
	);
}

export default FunctionClick;
