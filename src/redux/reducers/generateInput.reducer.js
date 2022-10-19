const generateInput = (state = {}, action) => {
    switch (action.type) {
      case 'SET_GENERATE_INPUT':
        state = action.payload; 
        console.log("boffa", state)
        return action.payload;
      default:
        return state;
    }
  };
  
  export default generateInput;