import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Login } from "../store/action/User";

function Logedin() {
  const dispatch = useDispatch();
  const { isLoggendIn } = useSelector((state) => state.userData);
  const [state, setState] = useState({
    username: "",
    password: "",
    imei: "",
  });
  console.log(state)
  const hadleLogin = (e) => {
    e.preventDefault();
    dispatch(Login(state.username, state.password, state.imei));
  };
  if (isLoggendIn) {
    return <Link to="/detail" />;
  }
  return (
    <div className="body">
      <Form className="form-login" onSubmit={hadleLogin}>
        <div className="Logo">This is Logo</div>
        <div id="from-isian">
          <Form.Group className="mb-2 mt-4" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={state.username}
              onChange={(e) => setState({ ...state, username: e.target.value })}
              type="username"
              placeholder="Username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={state.password}
              onChange={(e) => setState({ ...state, password: e.target.value })}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicImel">
            <Form.Label>imei</Form.Label>
            <Form.Control
              value={state.imei}
              onChange={(e) => setState({ ...state, imei: e.target.value })}
              type="imei"
              placeholder="imei"
            />
          </Form.Group>
          <button className="button-signin mt-4" type="submit">
            Login
          </button>
        </div>
      </Form>
    </div>
  );
}
export default Logedin;
