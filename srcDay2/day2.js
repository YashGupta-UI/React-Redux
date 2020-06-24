/*                 NPM vs YARN
Throughout the course we will be using Yarn, however using NPM or Yarn is a personal choice.
You can use this as a reference guide for the two different commands you can use.

Install dependencies from package.json: npm install == yarn

Install a package and add to package.json: npm install package --save == yarn add package

Install a devDependency to package.json: npm install package --save-dev == yarn add package --dev

Remove a dependency from package.json: npm uninstall package --save == yarn remove package

Upgrade a package to its latest version: npm update --save == yarn upgrade

Install a package globally: npm install package -g == yarn global add package

*/

/*




                                Create React App

create react app is a tool that was built by Facebook
to help developers get started with building react projects very quickly

The reason for this tool is because react is actually written in a version of JavaScript that is further
along than the version of JavaScript that our browsers understand.


So there are actually these two tools called Babel and webpack that take the react code that we write
and convert them into that older version of JavaScript that our browser is able to understand.

Babel is going to make sure that our JavaScript files
are going to work on all these browsers no matter what version no matter how old they are how new they
are they're going to make sure for us that hey every single one of these JavaScript files is going to
be understood.

Webpack is a module bundler it's letting us write a modular code.

So create reap app CRA already has all this configuration done for us.

At the end of this react classes we will learn how to do your own configuration.
In order to use this toll we use below commands:

npx create-react-app appname
cd appname
npm start


open-> pandey or harbola folder structure which cra gives us

And run npm run build to show
It's creating an optimized production build one of the beauty things of create
react app is that it optimizes the code for you.

So what we want to do now is take this built folder and put it on a server.


NPM -> 

NPM is a package manager. It's essentially a way for us to automate the process of installing
upgrading configuring or removing any libraries that we want.

Yarn -> same its also the package manager

The only difference is the commands that you put into your terminal.
So it could be npm start or yarn start.
yarn was actually created by Facebook at a time when npm had a few issues.



add something in the index.html and check on browser



EJECT-> DONT EJECT

It will give you 2 folders one is script and second is config.
It will have all the things that cra hides from us under the hood

*/

/* Difference between state vs props

1. if we pass something to component then that component receive it as props
2. state us mutable and props are non mutuable
3. Both are objects
4. state can be only access in class components where props can be access in both components
5. to access the props in class component we use this.props and in functional component props


*/
