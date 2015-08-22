var React = require('react');
var getTitles = require('../actions');
var SubredditStore = require('../stores/SubredditStrore');

function getState(props) {
  return {
    subreddits: SubredditStore.getSubreddit(props.params.id),
    loading: SubredditStore.isLoading()
  };
}

function requestData(props) {
  getTitles(props.params.id);
}

var Subreddit = React.createClass({

  getInitialState: function() {
    return {
      subreddits: [],
      loading: false
    };
  },

  componentDidMount: function() {
    requestData(this.props);
    SubredditStore.addChangeListener(this.handleChange);
  },

  componentWillUnmount: function() {
    SubredditStore.removeChangeListener(this.handleChange);
  },

  componentWillReceiveProps: function(nextProps) {
    requestData(nextProps);
  },

  handleChange: function() {
    this.setState(getState(this.props));
  },

  render: function() {
    return (
        <div>
            <ul>
                {this.state.loading ? 'loading...' : this.state.subreddits
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
