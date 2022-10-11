const generateInput = (state = {}, action) => {
    switch (action.type) {
      case 'SET_GENERATE_INPUT':
        console.log("boffa")
        return action.payload;
      default:
        return state;
    }
  };
  
  export default generateInput;