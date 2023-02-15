import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [filteredTodos, setFilteredTodos] = useState([]);
//   const {  todos, selectValue } = useContext(TodoContext);

  const todos = useSelector(state => state.todo.todos)
  const selectValue = useSelector(state => state.todo.selectValue)

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, selectValue]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const filterHandler = () => {
    switch (selectValue) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <TodoContainer>
      <TodosList>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} text={todo.text} id={todo.id} todo={todo} />
        ))}
      </TodosList>
    </TodoContainer>
  );
};

export default TodoList;

const TodoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodosList = styled.ul`
  min-width: 30%;
  list-style: none;
  display: flex;
  flex-direction: column;
`;
