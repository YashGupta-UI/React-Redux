/*

Motivation behind useEffect

In class components we performed side effects in our components ex: updating the dom,
fetching data from api 
Since the render method is too early to perfrom the side effects we have to make use of the lifecycle methods


Ex: Updating the document title to the current counter value
on initial render we want to set the document title to clicked 0 times so this code goes into
componentDidMount which executes it only once in the component lifecycle

componentDidMount(){
 document.title = 'You clicked ${this.state.count} times';
}

we then would have a button to increment the count state value but when count value increments
we also need to update the document title again so for that we need to write the same piece of code
in componentDidUpdate lifecycle method.

componentDidUpdate(){
 document.title = 'You clicked ${this.state.count} times';
}

we duplicate the code in different blocks


Aother Example:

Code related to same logic are written in two different blocks

TIMER

componentDidMount(){
 this.interval = setInterval(this.tick, 1000)
}

componentWillUnMount(){
 clearInterval(this.interval)
}


It would be nice if we group togther the related code and dont repeat the same code,
that is where the effect hook comes into the picture

*/

/*

useEffect:

1. The Effect hook lets you perfrom side effects in functional components by addresing the problems
which we just discussed

2. It is a close replacement for componentDidMount, componentDidUpdate and componentWillUnmount
three lifecycle methods can be handled by the useEffect hook


*/
