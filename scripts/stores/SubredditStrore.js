require('whatwg-fetch');
var createStore = require('../utils/StoreUtils.js');
var flux = require('../dispatcher').dispatcher;
var actionTypes = require('../constants');


var _store = {
  subreddits: ['javascript', 'clojure', 'rust', 'reactjs', 'golang'],
  subredditsTitles: {},
  loading: true
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
    _store.loading = false;
    _store.subredditsTitles[action.payload.id] = action.payload.links;
    SubredditStore.emitChange();
    break;
  case actionTypes.SUBREDDITS_FAILURE:
    _store.loading = false;
    console.log(action.payload);
    SubredditStore.emitChange();
  }
});

module.exports = SubredditStore;
