import { createSlice } from "@reduxjs/toolkit";
  
  const initialState = {
    email: "",
    isAuthorized: JSON.parse(localStorage.getItem('AUTH')) || false,
  };

  export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      logIn: (state,action) => {
        state.email = action.payload
        state.isAuthorized = true
      },
      logOut: (state) =>{
        state.email = '',
        state.isAuthorized = false
      }
    }
  })
  
  export const authActions = authSlice.actions
  // export const AuthReducer = (state = initialState, action) => {
  //   switch (action.type) {
  //     case authActionTypes.LOG_IN:
  //         return {
  //             ...state,
  //             email: action.payload,
  //             isAuthorized: true
  //         }
  //     case authActionTypes.LOG_OUT:
  //         return initialState
  //     default:
  //       return state;
  //   }
  // };
  