var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'CHANGE_EVENT';

function createStrore(spec) {
  var emitter = new EventEmitter();

  return assign({
    emitChange: function() {
      emitter.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback ){
      emitter.emit(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
      emitter.removeListener(CHANGE_EVENT, callback);
    }

  }, spec);
}


module.exports = createStrore;
