/*
why react exists ?
What problem does it solve ?
Why it makes front end development ?


You see a lot of times people learn a tool a library or a framework without understanding the core principles
that make it great by learning these things first. So that we'll have a foundation

And Remember We are not learning this to switch the job intead we want to be a web developer or can say
react.js developer, we are going to switch the profile. And once you master it you will surely get a good job

*/

/* Birth Of React 

React came out in 2013. But what do we have before then before that?

Well the front fronting landscape was very different initially back in the 90s and early 2000s.
We just had basic HTML CSS and JavaScript, HTML displayed the text on our web pages, css does the
styles and JavaScript allows us to have some interactivity in a Web site.

Open TraditionWeb.JPG and tell them about when new link request 


The problem with that? -> open issue.jpg

You see all these Web sites where run on different browsers and all these browsers were worked on by
different group of developers.
So each one of these browsers implemented while their browser differently.
So what happened was as we wanted to use more and more JavaScript in our web pages we had to account
for all these browsers that sometimes work differently from each other.
And we had to accommodate javascript to work with these different browsers.

Now eventually we had Jquery come out which allowed developers to easily interact with the DOM or the
document object model across all these browsers.

DOM -> elements of any page
It displays exactly how our page should look like and it's a tree like structure.
And javascript all it does is modifying the dom, you can remove elements - update elements

Although there's now more similarities and compatibility across different browsers
but back in the day we didn't have that.

The Jquery said hey we'll take care of that complexity for you just this is the syntax we'll use that
works across all browsers and you can manipulate the front end or the DOM however you want.
It was great but with this power developers started building bigger and bigger applications instead of just
something small like fb where you can do a lot of things


Well libraries like backbone J.S. came out because well our JavaScript files started getting bigger
and bigger and bigger libraries like backbone J.S. allowed us to organize these JavaScript files and
because it became easier and easier to work with the DOM we had the birth of a single page application(SPA).

SPA -> Load all the code once and work like a native desktop application

And in 2010 angular J.S. which was created by Google really became the standard way of building applications
this way now unlike Js query ,angular allowed developers to build these large applications by forming these
containers that well wrapped your project and because it was created by Google it had a lot of power
because people said well this is the way that we should build things.
Everything's organized.

We have these large JavaScript files but we can organize them this way you had code now that now had
better containers where you had things like controllers views and models and this idea of a Model View
Controller where each part of the application or each JavaScript file was divided into different things
that it did this idea of organizing our large code so they're easier to work with as teams get larger  
and larger really made angular J.S. popular but there was a problem.  **Complexity.jpg**


**** HISTORY **** 

We have more and more complexity now and although frameworks like angular J.S. came out people started
to notice it's getting harder and harder to find bugs in the code and understand how each part of the
app was affecting the other.


Data was flowing everywhere :(


Meanwhile Facebook developers were finding it hard as well on their end to maintain their app especially
their Facebook ads.

You see the Facebook ads app got more and more features more and more people were added to the team.
Now the growing number of lines of code the growing number of people working on the app their app became
really really difficult to handle and each update would cost more and more issues where you had all
these arrows relating to each other pointing to each other.
And after a while the engineers of Facebook just couldn't keep up with the way that they had created
this app.

They needed to upgrade their code base and this isn't just special in the front end world.
This is all of our programming.
It's why we need good architecture.

We need to think about how we organize our code how we manipulate data and how that data flows through
our programs.

So Facebook came up with a solution and that solution worked really really well for them.
That in 2013 they released react to the developer community at J.S. conf 2013 and their solution was
really really good.
And it took off because react devolved a whole new way to build front end applications now.

It also happened that in 2014 angular J.S. realized that the way that they've architected their framework
just didn't allow good applications to be built anymore so they decided in 2014 that they're going to
rewrite the entire library.
because they wanted to do an entire rewrite a lot of people during that time moved to react.

So combined with the fact that angular J.S. was getting a complete new rewrite Facebook was backing
react and the great principles that react introduced made it what it is today.
That is it became the most popular font and tooled with the most job demand across the world and being
used by very large companies like Airbnb be uber Netflix Twitter Reddit Pinterest Wicks PayPal stripe,
Tumblr Walmart.


What makes react so great?
What were these principles that made it jump from something that Facebook used to something that developers
all over the world use?

*/

/* Declarative vs Imperative 

Now the success of React comes down to four key things.

1. React says dont touch the DOM, i will do it for you.


Many existing frameworks and libraries before React where directly manipulating this Dom on every page.

DOM -> elements of any page
It displays exactly how our page should look like and it's a tree like structure.

Open site and change something on click and show them the manipulation:

Web sites were built using things like this all these ways that browsers allowed us to manipulate
the DOM.

They gave us the DOM API that we could access using something like innerHTML or getElementbyId,
getElementsByTagName this API allowed us to traverse the DOM access any node we wanted to maybe
remove them add new nodes.

And before React.
This is what libraries did you either did this manually or you used jQuery or you use some sort of
a library that allows you to use this in a simple fashion you see this way of programming was called
imperative: that is in an imperative paradigm you directly change individual parts of your app in response
to various user events.


React came up with a novel concept a more declarative approach and this is what React says to you.

Hey Dom manipulation is one of the biggest performance bottlenecks.
It takes a long time for Dom changes to happen.
The browser has to do two really intensive operations.

1) One is to repaint.
That is change an element and added onto a page

2) then refloat which is to recalculate the layout of the page and move things around if need be.

So changing the Dom was a really expensive operation.
So React says: hey you know what.
Let me take care that I'll find the best way for me to change the Dom and just declare to me what your
app looks like.

So all we need to do is say hey this is a javascript object of how I want the app to look and React
is going to hold this javascript object this massive massive blueprint of how things should look.
And based on this blueprint that we give it React just says hey just tell me what the page should
look like and I'll take care of it.
I'll do everything for you.
I'll find the best way to use the DOM.
You're never going to touch the DOM.
Just tell me what the page should look like.

This declarative paradigm is called that because we declare that hey this is what the state or data
of our app should be like.

The name React is simply saying hey based on whatever the state or
data of the app is that describes our app, I'm just going to React to it and change everything for you
so that you get the display that you want.


2.) Build websites like blocks -> Reactor is designed around the concept of reusable components
So like small components that you put together to make bigger app / component

so people can now share these components across different Web sites across different projects and they
will all work. (material ui / bootstrap)


Now this idea of components and react in a simple term is just plain JavaScript functions that we write

so we have the state over app or that is any data that describes our app.
For example the user is logged in whether it's true or false and maybe friends then components are created
based on that data well simply as functions.

let state = {
    user:'Yash Gupta',
    isLoggedIn: True,
    friends:['Harshit,'Harbola','Badola','Naveen','Mohan','etc']
  }

But components are simply just JavaScript functions that received some sort of input or attributes which
we call props.
And in return it returns this thing that kind of looks like HTML all but inside of JavaScript 


*/

function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
}

//And these components can be built like this as a function or even as a class.

class Welcome extends Component {
	render() {
		return <h1>Hello, {this.props.name}</h1>;
	}
}

/*
But the key here is that based on the state and these components that we built we have an entire component
that we can add to our page and reuse maybe over here as well if we wanted to.


INSTALL REACT DEV TOOL FTOM GOOGLE CHROME EXTENSION



3) One way data flow : Unidirectional Data Flow

Open-> Flow.jpg


Now Think we have click on logout element on DOM:


we would say that if somebody clicks on the sign out we're gonna change is logged in
to now say false and react as soon as the state changes reacts to that change and says hey the state
just change,combine the new state and the components we have and update the dom

You see the data only flows one way


A better way to think about this is like this: open flow2.jpg

Our application is simply built with this virtual dom.
This javascript object that describes our app and as soon as a state changes it's going to trickle down
that information and let everybody know

By adding this restriction it's really easy to debug code.

Open React-Concepts.jpg

4) UI, rest is up to you?

Angular: Its a framework
Raect: Its a UI library

React only care about this whole idea of components and virtual DOM and
I only am going to work with the view the user interface


The key idea was that because it was so small you can learn once and write anywhere.

Because of the react features we are actually able to move react to other places other than the web

1. React native -> works on mobile app
2. React 360 -> used for VR apps
3. React desktop/ electron -> allow us to build a desktop application and they interact with
                              windows, mac os , linux operating system


4. React Blessed -> work with the terminal and the command prompt


*/
