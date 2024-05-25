import React, { useState, useEffect, createRef, useRef } from "react";
import Input from "./component/input";
import { useNavigate } from "react-router-dom";
import UserService from "./service/userservice";
import { useDispatch } from "react-redux";
import { login } from "./store/reducers/auth";
const Login = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    UserService.login(username, password).then((res) => {
      if (res.errorCode === 0) {
        dispatch(
          login({
            token: res.data.accessToken,
            userInfo: res.data,
          })
        );
        navigate("/home");
      } else {
        setMessage("Wrong username or password");
      }
    });
  };
  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <>
      <div className="card-body bg-white rounded-bottom">
        <p className="text-center text-danger">{message}</p>
        <form onSubmit={handleSubmit}>
          <Input
            inputRef={usernameRef}
            id="txtUsername"
            label="User Name"
            type="text"
            maxLength="50"
            autoComplete="off"
            placeholder="Enter yor name"
          />
          <Input
            inputRef={passwordRef}
            id="txtPassword"
            label="Password"
            type="password"
            maxLength="50"
            autoComplete="off"
            placeholder="Enter yor password"
          />
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
