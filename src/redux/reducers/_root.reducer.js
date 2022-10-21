import { combineReducers } from 'redux';
import generateInput from './generateInput.reducer.js'; 
import hashtags from './hashtags.reducer';                    

const rootReducer = combineReducers({
  generateInput, 
  hashtags
});

export default rootReducer;
