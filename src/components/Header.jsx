import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authActions } from "../store/auth/authSlice";
import { todoActions } from "../store/todo/todoSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [isLoginBtnVisible, setIsLoginBtnVisible] = useState(true);
  const navigate = useNavigate();
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);

  const logoutHandler = () => {
    dispatch(authActions.logOut());
    dispatch(todoActions.deleteAll());
    localStorage.removeItem("AUTH");
    localStorage.removeItem("todos");
    navigate("/login");
  };

  const goToLoginPage = () => {
    navigate("/login");
    setIsLoginBtnVisible(false);
  };

  return (
    <HeaderBox>
      <h1>Redux Todo</h1>

      <nav>
        <ul>
          {isAuthorized ? (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          ) : (
            isLoginBtnVisible && (
              <li>
                <button onClick={goToLoginPage}>login</button>
              </li>
            )
          )}
        </ul>
      </nav>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ff6f47;
  color: white;
  padding: 0 10%;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
  }

  li {
    margin: 0 1rem;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 1.25rem;
  }

  a:hover,
  a:active {
    color: #b864da;
  }

  button {
    font-size: 1.25rem;
    background-color: #ffbb00;
    border: 1px solid #ffbb00;
    padding: 0.5rem 1.5rem;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    color: #2c2922;
  }

  button:hover,
  button:active {
    background-color: #ffa600;
    border-color: #ffa600;
  }
`;
