var React = require('react');
var fetch = require('../actions');
var SubredditStore = require('../stores/SubredditStrore');


function getState(props) {
  return {
    subreddits: SubredditStore.getSubreddit(props.params.id)
  };
}

function requestData(props) {
  fetch(props.params.id);
}

var Subreddit = React.createClass({

  getInitialState: function() {
    return {
      subreddits: []
    };
  },

  componentDidMount: function() {
    SubredditStore.addChangeListener(this.handleChange);
  },

  componentWillUnmount: function() {
    SubredditStore.removeChangeListener(this.handleChange);
  },

  componentWillReceiveProps: function(nextProps) {
    requestData(nextProps);
  },

  handleChange: function() {
    console.log('handleChange');
    this.setState(getState(this.props));
  },

  render: function() {
    return (
        <div>
            <ul>
                {this.state.subreddits
                 .map((item, index) => {
                   return <li key={index}>{item.data.title}</li>;
                 })
                }
            </ul>
        </div>
    );
  }
});


module.exports = Subreddit;
