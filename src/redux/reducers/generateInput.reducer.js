const generateInput = (state = {}, action) => {
    switch (action.type) {
      case 'SET_GENERATE_INPUT':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default generateInput;