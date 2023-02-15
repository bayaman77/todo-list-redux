import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Form from "../components/todo/Form";
import TodoList from "../components/todo/TodoList";

const Todo = () => {
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);

  useEffect(() => {
    localStorage.setItem("AUTH", JSON.stringify(isAuthorized));
  }, [isAuthorized]);

  return (
    <>
      {isAuthorized ? (
        <>
          <Title>
            <h1>Todo List</h1>
          </Title>
          <div>
            <Form />
            <TodoList />
          </div>
        </>
      ) : (
        <Warning>Please log in</Warning>
      )}
    </>
  );
};

export default Todo;

const Title = styled.header`
  font-size: 2rem;
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Warning = styled.h1`
  margin-top: 30vh;
  text-align: center;
  color: red;
`;
