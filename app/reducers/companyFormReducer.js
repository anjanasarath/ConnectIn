import * as actions from '../actions';

const companyFormReducer = (state={}, action) => {
  var newState= {};
  if(action.type == actions.SUBMIT_SUCCESS) {
    //debugger;
    newState = {
      isSubmitted: true,
      ...state
    }
  }

  if(action.type == actions.UPLOADIMAGE_SUCCESS) {
    newState = {
      isImageUploaded: true,
      ...state
    }
  }

  return newState;
}

export default companyFormReducer;
