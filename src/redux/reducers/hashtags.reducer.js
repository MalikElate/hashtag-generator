const hashtags = (state = [], action) => {
    switch (action.type) {
      case 'SET_HASHTAGS':
        state = action.payload; 
        return action.payload;
      default:
        return state;
    }
  };
  
  export default hashtags;