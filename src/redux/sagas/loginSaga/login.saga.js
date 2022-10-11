import { takeLatest } from 'redux-saga/effects';
import axios from 'axios'; 

function* login(action) {
  try {
    const response = yield axios.post('/api/login', action.payload);
    console.log(response); 
    yield console.log('test worked', action.payload.request); 
  } catch (error) {
    console.log('Request login failed', error);
  }
}

function* loginSaga() {
  yield takeLatest('LINKEDIN_LOGIN', login);
}

export default loginSaga;