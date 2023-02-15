import { combineReducers, createStore } from "redux";
import { AuthReducer } from "./auth/authReducer";
import { TodoReducer } from "./todo/todoReducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  todo: TodoReducer
});

export const store = createStore(rootReducer);

store.subscribe(() => {
    console.log("STORE CHANGED", store.getState());
  });