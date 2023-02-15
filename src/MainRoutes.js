import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MainLayout from "./components/MainLayout";
import Auth from "./pages/Auth";
import Todo from "./pages/Todo";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="todos" element={<Todo />} />
        <Route path="login" element={<Auth/>}/>
        <Route path="*" element={<Warning>Page don't found</Warning>}/>
      </Route>
    </Routes>
  );
};

export default MainRoutes;

const Warning = styled.h1`
text-align: center;
`
