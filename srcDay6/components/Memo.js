import React from 'react';

function Memo({ propsName }) {
	console.log('INSIDE MEMO COMPONENT');
	return <div>{propsName}</div>;
}

export default React.memo(Memo); // HOC
