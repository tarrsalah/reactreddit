var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Redirect = require('react-router').Redirect;
var history = require('react-router/lib/HashHistory').history;
var App = require('./components/App.react.js');
var Subreddit = require('./components/Subreddit.react.js');

var Root = React.createClass({

  render: function() {
    return (
        <Router history={history}>
            <Redirect from="/" to="/r/javascript"/>
            <Route path="/" component={App}>
                <Route path="r/:id" component={Subreddit}/>
            </Route>
        </Router>
    );
  }
});

React.render(<Root/>, document.getElementById('root'));
