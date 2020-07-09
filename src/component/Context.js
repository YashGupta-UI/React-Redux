// context api -> (new feature)

// app -> A , b ,c
// a-> <div>abc</div>
// b- > d -> <div><div>
// c -> e ->f -> <div>f </div>

// context api provides a way to pass down the data through the components tree without having to pass props manually down at every level

// There are 3 stpes which we need to implement for context

// 1. Create the context
// 2. Provide a context value
// 3. consume the context vallue

import React from 'react';

const userContext = React.createContext('en');

/*
Every context object created using the createContext() method comes with a provider and a consumer react component
*/

const UserProvider = userContext.Provider;
const UserConsumer = userContext.Consumer;

export { UserProvider, UserConsumer };
