import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { todoActionTypes } from "../../store/todo/todoReducer";

const TodoItem = ({ text, todo, id }) => {
  const dispatch = useDispatch();

  const editHandler = () => {
    dispatch({ type: todoActionTypes.TOGGLE_EDIT_STATUS, payload: true });
    dispatch({ type: todoActionTypes.CHANGE_INPUT_VALUE, payload: text });
    dispatch({ type: todoActionTypes.CHANGE_EDITING_TODO_ID, payload: id });
  };

  const textDecoration = () => (todo.completed ? "line-through" : "");
  const opacity = () => (todo.completed ? "0.5" : "");

  return (
    <Todo>
      <li
        style={{
          textDecoration: ` ${textDecoration()}`,
          opacity: `${opacity()}`,
        }}
      >
        {text}
      </li>
      <CompleteBtn
        onClick={() =>
          dispatch({ type: todoActionTypes.COMPLETE, payload: id })
        }
      >
        <i className="fas fa-check"></i>
      </CompleteBtn>
      <EditBtn onClick={editHandler}>
        <i className="fas fa-edit"></i>
      </EditBtn>
      <TrashBtn
        onClick={() => dispatch({ type: todoActionTypes.REMOVE, payload: id })}
      >
        <i className="fas fa-trash"></i>
      </TrashBtn>
    </Todo>
  );
};

export default TodoItem;

const Todo = styled.div`
  margin: 0.5rem;
  background: white;
  font-size: 1.5rem;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 1s ease;
  li {
    flex: 1;
    padding: 0rem 0.5rem;
  }
`;

const CompleteBtn = styled.button`
  background: #ff6f47;
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.2s;
  background: white;
  color: rgb(11, 212, 162);
  &:hover {
    background: rgb(11, 212, 162);
    color: white;
  }
`;
const EditBtn = styled.button`
  background: #ff6f47;
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.2s;
  background: white;
  color: blueviolet;
  &:hover {
    background: blueviolet;
    color: white;
  }
`;
const TrashBtn = styled.button`
  background: #ff6f47;
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.2s;
  background: white;
  color: red;
  &:hover {
    background: red;
    color: white;
  }
`;
