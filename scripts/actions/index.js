var actionTypes = require('../constants');
var fetchSubreddit = require('../utils/APIUtils.js');
var dispatchAsync = require('../dispatcher').dispatchAsync;
var dispatch = require('../dispatcher').dispatch;
var SubredditStore = require('../stores/SubredditStrore');

function getTitles(id) {
  var previousReddits = SubredditStore.getSubreddit(id);
  if (previousReddits) {
    dispatch(actionTypes.SUBREDDITS_SUCCESS, previousReddits);
  } else {
    dispatchAsync(fetchSubreddit(id), {
      request: actionTypes.SUBREDDITS_REQUEST,
      success: actionTypes.SUBREDDITS_SUCCESS,
      failure: actionTypes.SUBREDDITS_FAILURE
    });
  }
}

module.exports = getTitles;
