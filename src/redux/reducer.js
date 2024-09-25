// src/redux/reducer.js
const initialState = {
    buttonClicked: '',
  };
  
  export const buttonReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_BUTTON_CLICKED':
        return { ...state, buttonClicked: action.payload };
      default:
        return state;
    }
  };
  