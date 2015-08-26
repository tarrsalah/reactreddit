var flux = require('flux');

var _dispatcher = new flux.Dispatcher();

function dispatch(actionType, payload) {
  _dispatcher.dispatch({
    actionType: actionType,
    payload: payload
  });
}

function dispatchAsync(promise, actionTypes) {
  dispatch(actionTypes.request);

  promise.then(function(response){
    dispatch(actionTypes.success, response);
  }, function(error) {
    dispatch(actionTypes.failure, error);
  });
}

module.exports = {_dispatcher, dispatch, dispatchAsync};
