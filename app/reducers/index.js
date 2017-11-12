import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { loadingBarReducer } from 'react-redux-loading-bar';
import companyFormReducer  from './companyFormReducer';

const combReducers = combineReducers({
  companyForm: companyFormReducer,
  form: formReducer,
  loadingBar: loadingBarReducer
});

export default combReducers;
