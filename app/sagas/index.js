import { all, call, fork, put, take } from 'redux-saga/effects';
import * as actions from '../actions';
import { uploadImageApi, submitFormApi } from '../serviceApi';

function* submitForm(){
  while(true) {
    const { companyName, companyDesc } = yield take(actions.SUBMIT_FORM)
    yield fork(callSubmitFormApi, companyName, companyDesc)
  }
}
function* callSubmitFormApi(companyName, companyDesc){
  const response = yield call(submitFormApi, companyName, companyDesc)
  debugger;
  yield put(actions.submitSuccess())
}

function* uploadImage() {
  while(true) {
    const { file } = yield take(actions.UPLOAD_IMAGE)
    yield fork(callUploadImageApi, file)
  }
}

function* callUploadImageApi(file) {
  const response = yield call(uploadImageApi, file)
}

export default function* rootSaga() {
  yield all([
    fork(uploadImage),
    fork(submitForm)
  ])
}
