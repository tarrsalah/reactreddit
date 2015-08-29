var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Redirect = require('react-router').Redirect;
var history = require('react-router/lib/HashHistory').history;
var App = require('./components/App.react.js');
var Subreddit = require('./components/Subreddit.react.js');

require('core-js');
require('../styles/main.css');
require('../node_modules/purecss/build/pure-min.css');

class Root extends React.Component {

  render() {
    return (
        <Router history={history}>
            <Redirect from="/" to="/r/javascript"/>
            <Route path="/" component={App}>
                <Route path="r/:id" component={Subreddit}/>
            </Route>
        </Router>
    );
  }
}

React.render(<Root/>, document.getElementById('root'));
