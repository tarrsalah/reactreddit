var flux = require('flux');

var dispatcher = new flux.Dispatcher();

function dispatch(actionType, payload) {
  dispatcher.dispatch({
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

module.exports = {dispatcher, dispatch, dispatchAsync};
