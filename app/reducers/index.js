import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import companyFormReducer from './companyFormReducer';

const combReducers = combineReducers({
  companyForm: companyFormReducer,
  form: formReducer
});

export default combReducers;
