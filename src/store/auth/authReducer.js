export const authActionTypes = {
    LOG_IN: "LOG_IN",
    LOG_OUT: "LOG_OUT",
  };
  
  const initialState = {
    email: "",
    isAuthorized: JSON.parse(localStorage.getItem('AUTH')) || false,
  };
  
  export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
      case authActionTypes.LOG_IN:
          return {
              ...state,
              email: action.payload,
              isAuthorized: true
          }
      case authActionTypes.LOG_OUT:
          return initialState
      default:
        return state;
    }
  };
  