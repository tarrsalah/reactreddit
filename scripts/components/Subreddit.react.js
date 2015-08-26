var React = require('react');
var getTitles = require('../actions');
var SubredditStore = require('../stores/SubredditStrore');

function requestData(props) {
  getTitles(props.params.id);
}

class Subreddit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      subreddits: [],
      loading: false
    };

    this.removeListener = null;
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    requestData(this.props);
    this.removeListener = SubredditStore.addListener(this.handleChange);
  }

  componentWillUnmount() {
   this.removeListener();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id !== this.props.params.id) {
      requestData(nextProps);
    }
  }

  handleChange() {
    this.setState({
      subreddits: SubredditStore.getLinks(this.props.params.id),
      loading: SubredditStore.isLoading()
    });
  }

  render() {
    return (
        <div>
            <ul>
                {this.state.loading ? 'loading...' : this.state.subreddits
                 .map((item, index) => {
                   return (
                       <li key={index}>
                           <a href={item.data.url}>{item.data.title}</a>
                       </li>
                   );
                 })
                }
            </ul>
        </div>
    );
  }
}

module.exports = Subreddit;
