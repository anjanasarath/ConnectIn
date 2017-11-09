import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
//import { loadingBarReducer as ldr } from 'react-redux-loading-bar';
import companyFormReducer  from './companyFormReducer';
import ldr from './ldr';

const combReducers = combineReducers({
  companyForm: companyFormReducer,
  form: formReducer,
  loadingBar: ldr,
});

export default combReducers;
