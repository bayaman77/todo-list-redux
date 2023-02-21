// export const todoActionTypes = {
//     CHANGE_INPUT_VALUE: 'CHANGE_INPUT_VALUE',
//     ADD: 'ADD',
//     COMPLETE: 'COMPLETE',
//     REMOVE: 'REMOVE',
//     EDIT: 'EDIT',
//     CHANGE_EDITING_TODO_ID:'CHANGE_EDITING_TODO_ID',
//     TOGGLE_EDIT_STATUS: 'TOGGLE_EDIT_STATUS',
//     CHANGE_SELECT_VALUE: 'CHANGE_SELECT_VALUE',
//     DELETE_ALL: 'DELETE_ALL'
// }

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  inputValue: "",
  editingTodoId: null,
  editStatus: false,
  selectValue: "all",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    changeInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    add: (state, action) => {
      state.todos.push(action.payload);
      state.inputValue = "";
    },
    complete: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    remove: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    edit: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === state.editingTodoId
          ? { ...todo, text: action.payload }
          : todo
      );
      state.inputValue = ''
    },
    getEditingTodoId: (state,action) => {
      state.editingTodoId = action.payload
    },
    toggleEditStatus: (state, action) => {
      state.editStatus = action.payload
    },
    changeSelectValue: (state, action) => {
      state.selectValue = action.payload
    },
    deleteAll : (state) => {
      state.todos = []
    }

  },
});

export const todoActions = todoSlice.actions


// export const TodoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case todoActionTypes.CHANGE_INPUT_VALUE: {
//       return {
//         ...state,
//         inputValue: action.payload,
//       };
//     }
//     case todoActionTypes.ADD: {
//       console.log(state.todos);
//       return {
//         ...state,
//         todos: [...state.todos, action.payload],
//         inputValue: "",
//       };
//     }
//     case todoActionTypes.COMPLETE: {
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.payload
//             ? { ...todo, completed: !todo.completed }
//             : todo
//         ),
//       };
//     }
//     case todoActionTypes.REMOVE: {
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.payload),
//       };
//     }
//     case todoActionTypes.EDIT: {
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === state.editingTodoId
//             ? { ...todo, text: action.payload }
//             : todo
//         ),
//         inputValue: "",
//       };
//     }
//     case todoActionTypes.CHANGE_EDITING_TODO_ID: {
//       return {
//         ...state,
//         editingTodoId: action.payload,
//       };
//     }
//     case todoActionTypes.TOGGLE_EDIT_STATUS: {
//       return {
//         ...state,
//         editStatus: action.payload,
//       };
//     }
//     case todoActionTypes.CHANGE_SELECT_VALUE: {
//       return {
//         ...state,
//         selectValue: action.payload,
//       };
//     }
//     case todoActionTypes.DELETE_ALL: {
//       return {
//         ...state,
//         todos: [],
//       };
//     }
//     default:
//       return state;
//   }
// };
