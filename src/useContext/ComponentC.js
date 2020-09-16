import React from 'react';
import { LangContext, UserContext } from '../App';
import UseContextHook from './UseContextHook';

// class ComponentC extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<LangContext.Consumer>
// 					{lang => {
// 						return <div>User Context lang is {lang}</div>;
// 					}}
// 				</LangContext.Consumer>
// 			</div>
// 		);
// 	}
// }

// class ComponentC extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<LangContext.Consumer>
// 					{lang => {
// 						return (
// 							<UserContext.Consumer>
// 								{user => {
// 									return (
// 										<div>
// 											Language {lang} - Username {user}
// 										</div>
// 									);
// 								}}
// 							</UserContext.Consumer>
// 						);
// 					}}
// 				</LangContext.Consumer>
// 			</div>
// 		);
// 	}
// }

class ComponentC extends React.Component {
	render() {
		return <UseContextHook />;
	}
}

export default ComponentC;
