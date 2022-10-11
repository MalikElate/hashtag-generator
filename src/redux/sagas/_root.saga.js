import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga/login.saga'; 

export default function* rootSaga() {
  yield all([
    loginSaga(), 
  ]);
}
