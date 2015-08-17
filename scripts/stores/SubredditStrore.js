require('whatwg-fetch');
var createStore = require('../utils/StoreUtils.js');
var flux = require('../dispatcher').dispatcher;
var actionTypes = require('../constants');


var _store = {
  subreddits: ['awww', 'pugs', 'corgi'],
  subredditsTitles: {},
  loading: false
};

var SubredditStore = createStore({
  getAllSubreddits: function() {
    return _store.subreddits;
  },

  getSubreddit: function(id) {
    return _store.subredditsTitles[id];
  },

  isLoading: function() {
    return _store.loading;
  }
});

flux.register(function(action){
  switch(action.actionType) {
  case actionTypes.SUBREDDITS_REQUEST:
    _store.loading = true;
    SubredditStore.emitChange();
    break;
  case actionTypes.SUBREDDITS_SUCCESS:
    console.log(action.payload.id);
    _store.loading = false;
    _store.subredditsTitles[action.payload.id] = action.payload.links;
    SubredditStore.emitChange();
    break;
  case actionTypes.SUBREDDITS_FAILURE:
    _store.loading = false;
    SubredditStore.emitChange();
  }
});


module.exports = SubredditStore;
