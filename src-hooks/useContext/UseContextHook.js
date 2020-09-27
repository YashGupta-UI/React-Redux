import React, { useContext } from 'react';
import { LangContext, UserContext } from '../App';

function UseContextHook() {
	const language = useContext(LangContext);
	const userName = useContext(UserContext);
	return (
		<div>
			{language}- {userName}
		</div>
	);
}

export default UseContextHook;
