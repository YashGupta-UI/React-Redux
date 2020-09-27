import React from 'react';
import ComponentC from './ComponentC';

const ComponentB = props => {
	return <ComponentC lang={props.lang} />;
};

export default ComponentB;
