export const todoActionTypes = {
    CHANGE_INPUT_VALUE: 'CHANGE_INPUT_VALUE',
    ADD: 'ADD',
    COMPLETE: 'COMPLETE',
    REMOVE: 'REMOVE',
    EDIT: 'EDIT',
    CHANGE_EDITING_TODO_ID:'CHANGE_EDITING_TODO_ID',
    TOGGLE_EDIT_STATUS: 'TOGGLE_EDIT_STATUS',
    CHANGE_SELECT_VALUE: 'CHANGE_SELECT_VALUE',
    DELETE_ALL: 'DELETE_ALL'
}
const initialState = {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
    inputValue: "",
    editingTodoId: null,
    editStatus: false,
    selectValue: 'all'
  };

export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case todoActionTypes.CHANGE_INPUT_VALUE: {
      return {
        ...state,
        inputValue: action.payload,
      };
    }
    case todoActionTypes.ADD: {
      console.log(state.todos);
      return {
        ...state,
        todos: [...state.todos, action.payload],
        inputValue: "",
      };
    }
    case todoActionTypes.COMPLETE: {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    }
    case todoActionTypes.REMOVE: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }
    case todoActionTypes.EDIT: {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === state.editingTodoId
            ? { ...todo, text: action.payload }
            : todo
        ),
        inputValue: "",
      };
    }
    case todoActionTypes.CHANGE_EDITING_TODO_ID: {
      return {
        ...state,
        editingTodoId: action.payload,
      };
    }
    case todoActionTypes.TOGGLE_EDIT_STATUS: {
      return {
        ...state,
        editStatus: action.payload,
      };
    }
    case todoActionTypes.CHANGE_SELECT_VALUE: {
      return {
        ...state,
        selectValue: action.payload,
      };
    }
    case todoActionTypes.DELETE_ALL: {
        return {
            ...state,
            todos: []
        }
    }
    default:
      return state;
  }
}
