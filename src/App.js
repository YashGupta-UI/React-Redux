import React, { Component } from 'react';
import ComponentA from './useContext/ComponetA';

export const LangContext = React.createContext();
export const UserContext = React.createContext();

class App extends Component {
	render() {
		return (
			<div>
				<LangContext.Provider value={'en'}>
					<UserContext.Provider value={'pandey'}>
						<ComponentA />
					</UserContext.Provider>
				</LangContext.Provider>
			</div>
		);
	}
}

export default App;

// Steps

// 1. Define
// 2. Provide
// 3. Consume
