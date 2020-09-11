import React, { Component } from 'react';
import ClickCounter from './component/ClickCounter';
import HoverCounter from './component/HoverCounter';
import ComponentC from './component/ComponentC';
import { UserProvider } from './component/Context';

class App extends Component {
	state = {
		lang: 'en',
	};
	render() {
		return (
			<div>
				<ClickCounter age="27" hoho="lulu" />
				<HoverCounter test="28" />
				{/* Mnaully passing props <ComponentC lang={this.state.lang} /> */}
				{/*  value is a attribute in the provider */}
				{/* <UserProvider value={this.state.lang}>
					<ComponentC />
		</UserProvider> */}
			</div>
		);
	}
}

export default App;

// lifting state up -> react org

// hoc- > to share common functionality between the components

// hoc -> A Higher Order Component is a pattern where a function takes a component as an argument
// and return a new component

// const NewComponent = higherOrder(originalComponent);

// const IronMan = withSuit('Tony Stark');
