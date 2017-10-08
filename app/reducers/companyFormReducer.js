import * as actions from '../actions';

const companyFormReducer = (state={}, action) => {
  var newState= {};
  if(action.type == actions.SUBMIT_SUCCESS) {
    debugger;
    newState = {
      isSubmitted: true
    }
  }

  return newState;
}

export default companyFormReducer;
