var React = require('react');
var ReactDOM = require('react-dom');

var Provider = require('react-redux').Provider;
var Router = require('react-router').Router;
var browserHistory = require('react-router').browserHistory;

var store = require('./redux-store');
var routes = require('./routes').routes;

var initialState = window.__INITIAL_STATE__;
store = store.configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document
)
