import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth/authSlice";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formState, setState] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (name) => {
    return (event) => {
      setState((prev) => ({ ...prev, [name]: event.target.value }));
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      formState.email === "test@gmail.com" &&
      formState.password === "123123"
    ) {
      dispatch(authActions.logIn(formState.email));
      navigate("/todos");
    }
  };

  return (
    <AuthContainer>
      <section>
        <form onSubmit={submitHandler}>
          <InputBox>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={inputChangeHandler("email")}
              value={formState.email}
            />
          </InputBox>
          <InputBox>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={inputChangeHandler("password")}
              value={formState.password}
            />
          </InputBox>
          <button>Login</button>
        </form>
      </section>
    </AuthContainer>
  );
};

export default Auth;

const AuthContainer = styled.main`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 25rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f4f0fa;
  button {
    padding: 0.3rem 1rem;
    font-size: 1.5rem;
    font-weight: thin;
    border: none;
    background: white;
    color: #ff6f47;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid #ff6f47;
    border-radius: 25px;
  }
  button:hover {
    background: #ff6f47;
    color: white;
  }
`;

const InputBox = styled.div`
  margin-bottom: 0.5rem;
  label {
    display: block;
    color: #ff6f47;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  input {
    display: block;
    width: 20rem;
    margin: auto;
    border-radius: 4px;
    padding: 0.25rem;
    border: 1px solid #ccc;
    &:focus {
      outline: 1px solid #ff6f47;
    }
  }
`;
