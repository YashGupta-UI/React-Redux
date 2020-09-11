import React, { Component } from 'react';
import { ClassCounter } from './ClassCounter';
import HookCounter from './HookCounter';
import HookCounter2 from './HookCounter2';
import HookCounter3 from './HookCounter3';
import HookCounter4 from './HookCounter4';

class App extends Component {
	render() {
		return (
			<div>
				<ClassCounter />
				<HookCounter />
				<HookCounter2 />
				<HookCounter3 />
				<HookCounter4 />
			</div>
		);
	}
}

export default App;

/* Hooks

Hooks are a new features in react version 16.8 which allow you to use react features without
having to write a class

Ex-> state manage of a component , lifecycle methods

Hook's doesnt work inside class component

*/

/* Motivation behind hooks:

Reason1: this, bind events in class component 
Reason2: There is no particular way to reuse the stateful component logic
HOC patters & renderProps pattern do address this problem but -> Code follow harder to follow

Reason3: Create components for complex scenarios such as data fetching and subscribing to events
related code is not organized in one place but scattered along different lifecycle methods.


ex-> data fetching:
componentDidMount()
componentDidUpdate()

event listeners:
componentDidMount()
componentWillUnMount()

componentDidMount(){
	document.getElementByid('yash').addEventListerner('click', () => {

	})
}

componentWillUnMount(){
	clean up task
	.removeEventListener()
}


*/

/* Noteworthy points 

1. React version 16.8 or higher
2. Completely opt in
3. hooks doesnt contain any breaking changes
4. class wont be removed in react
5. hooks dont replace your existing knowledge of react concepts

*/
