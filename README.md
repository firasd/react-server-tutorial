[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

# React Server Tutorial

This is a modified version of the React comment box example from [the React tutorial](http://facebook.github.io/react/docs/tutorial.html). The example app has been modified to add Server-Side Rendering, React Router, and Redux.

## To use

The Node.js app serves static files from `public/` and handles requests to `/api/comments` to fetch or add data. Start a server with:

```sh
npm install
node server.js
```

And visit <http://localhost:3000/>. Try opening multiple tabs!

## Changing the port

You can change the port number by setting the `$PORT` environment variable before invoking the script, e.g.,

```sh
PORT=3001 node server.js
```
