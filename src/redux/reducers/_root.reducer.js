import { combineReducers } from 'redux';
import generateInput from './generateInput.reducer.js'; 

const rootReducer = combineReducers({
  generateInput, 
});

export default rootReducer;
