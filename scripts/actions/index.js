var actionTypes = require('../constants');
var fetchSubreddit = require('../utils/APIUtils.js');
var dispatchAsync = require('../dispatcher').dispatchAsync;

function fetch(id) {
  dispatchAsync(fetchSubreddit(id), {
    request: actionTypes.SUBREDDITS_REQUEST,
    success: actionTypes.SUBREDDITS_SUCCESS,
    failure: actionTypes.SUBREDDITS_FAILURE
  });
}

module.exports = fetch;
