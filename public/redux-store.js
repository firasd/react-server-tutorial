var createStore = require('redux').createStore;

var reducer = function(state, action) {
  if(state === undefined) {
    return {};
  }
  var newState = state;
  switch(action.type) {
    case 'add_comment':
      var newComments = state.data.concat([action.comment]);
      newState = Object.assign({}, state, {data: newComments});
      break;
    case 'set_comments':
      newState = Object.assign({}, state, {data: action.data})
      break;
  }
  return newState;
}

module.exports = {
  configureStore: function(initialState) {
    return createStore(reducer, initialState)
  }
}
