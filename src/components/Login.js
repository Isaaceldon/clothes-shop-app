import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/login.css";
import React, { useState, useContext } from "react";
import { UserContext } from "../Helpers/UserContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLogin, setIsLogin } = useContext(UserContext);

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const loginEmail = localStorage.getItem("loggedEmail");
    const loginPassword = localStorage.getItem("loggedPassword");
    if (loginEmail === email && loginPassword === password) {
      setIsLogin(true);
      localStorage.setItem("isLogin", isLogin);
      navigate("/");
    } else {
      console.log("All is wrong !");
      console.log(loginEmail);
    }
  };

  return (
    <div className="login-content">
      <div className="login-form container ">
        <div className=" header-container d-flex justify-content-center align-items-center text-center my-3">
          <div className="header-user w-25 d-flex justify-content-center align-items-center">
            <span>
              <i className="fas fa-user user-icon mx-2"></i>
            </span>
            <h2 className="mx-2">Login</h2>
          </div>
        </div>
        <div>
          <p className="text-danger">
            Héééee!! You're here, just fill all input using your last
            informations for registering because we kept your data locally.✔✔😂
          </p>
        </div>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              please enter correct email
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Form.Control.Feedback type="invalid">
            please enter correct password
          </Form.Control.Feedback>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
