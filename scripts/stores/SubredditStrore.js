var actionTypes = require('../constants');
var List = require('immutable').List;
var dispatcher = require('../dispatcher')._dispatcher;
var OrderedMap = require('immutable').OrderedMap;
var ReduceStore = require('flux/utils').ReduceStore;

class RedditStore extends ReduceStore {

  getInitialState() {
    return {
      titles: List.of('javascript', 'reactjs', 'clojure', 'golang'),
      links: OrderedMap.of({}),
      loading: false
    };
  }

  getTitles() {
    return this.getState().titles;
  }

  getLinks(id) {
    return this.getState().links.get(id);
  }

  isLoading() {
    return this.getState().loading;
  }

  reduce(state, action) {
    switch(action.actionType) {
    case actionTypes.SUBREDDITS_REQUEST:
      return Object.assign(state, {
        loading: true
      });
    case actionTypes.SUBREDDITS_SUCCESS:
      return Object.assign(state, {
        links: state.links.set(action.payload.id, action.payload.links),
        loading: false
      });
    case actionTypes.SUBREDDITS_FAILURE:
      console.log(action.payload.error);
      return Object.assign(state, {
        loading: false
      });
    }
  }
}


var instance = new RedditStore(dispatcher);
module.exports = instance;
