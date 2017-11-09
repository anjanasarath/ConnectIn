import * as actions from '../actions';

const ldr = (state={}, action ) => {
  var newState = {};
  if(action.type == actions.SHOW_LOADING) {
    debugger;
    newState = {
      bar: 1
    }
  }
  return newState;
}

export default ldr;
