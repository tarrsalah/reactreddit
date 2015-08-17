var React = require('react');
var Link = require('react-router').Link;
var SubredditStore = require('../stores/SubredditStrore');

var App = React.createClass({

  render: function() {
    return (
        <div>
            <div className="navbar pure-menu pure-menu-horizontal">
                <Link id="heading" to="/"
                    className="header pure-menu-heading pure-menu-link">
                    reactreddit
                </Link>

                <ul className="pure-menu-list">
                    {SubredditStore.getAllSubreddits()
                     .map((sub, index) => {
                       return (
                           <li key={index} className="pure-menu-item">
                             <Link to={'/r/' + sub}
                               className="pure-menu-link">
                               {sub}
                             </Link>
                          </li>
                      );
                    })}
                </ul>
            </div>

        {this.props.children}

         </div>
    );
  }
});

module.exports = App;
