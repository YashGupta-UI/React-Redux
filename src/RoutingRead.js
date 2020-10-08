/*

Routing is about being able to show different pages to the user.

The idea behind a single page application is to have,
a single html file.
We still want to provide the user with a normal web using experience
though, we want to show the user different pages for different URLs.

The trick just is that we don't actually have multiple html files, but then we instead use javascript
to render different pages for different paths.

/blog /account /buy /cart

So we don't really have different files but simply we re-render parts off that single page or maybe
the entire single page depending on which path the user navigated to in our application. This is what
routing is about, parsing the path,
so the path after our domain and showing the appropriate jsx or component code in our app.

For this we need to add a router package that do the tasks for us


*/
