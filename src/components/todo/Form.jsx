import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { todoActions } from "../../store/todo/todoSlice";

const Form = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.todo.inputValue);
  const editStatus = useSelector((state) => state.todo.editStatus);

  const submitTodoHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    dispatch(todoActions.add(newTodo));
  };

  const saveEditedTodo = (e) => {
    e.preventDefault();
    dispatch(todoActions.edit(inputValue));
    dispatch(todoActions.toggleEditStatus(false));
  };

  const deleteAllTodos = (e) => {
    e.preventDefault();
    dispatch(todoActions.deleteAll());
  };
  return (
    <StyledForm>
      <input
        value={inputValue}
        onChange={(e) =>
          dispatch(todoActions.changeInputValue(e.target.value))
        }
        type="text"
      />
      {editStatus ? (
        <button onClick={saveEditedTodo}>
          <i className="fas fa-redo"></i>
        </button>
      ) : (
        <button
          disabled={!inputValue}
          onClick={submitTodoHandler}
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
      )}

      <div className="select">
        <select
          onChange={(e) =>
            dispatch(todoActions.changeSelectValue(e.target.value))
          }
          name="todos"
          className="filter-todo"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      <button onClick={deleteAllTodos}>Delete all</button>
    </StyledForm>
  );
};

export default Form;

const StyledForm = styled.form`
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  input,
  button {
    padding: 0.5rem;
    font-size: 1.7rem;
    border: none;
    background: white;
  }
  button {
    color: #ff6f47;
    background: #f7fffe;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  button:hover {
    background: #ff6f47;
    color: white;
  }
  select {
    padding: 1rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0 !important;
    background-image: none;
    color: #ff6f47;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
    width: 12rem;
  }
`;
