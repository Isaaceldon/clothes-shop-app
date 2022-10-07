import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../styles/login.css";

export default function Register() {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState(
    localStorage.getItem("loggedUsername") || ""
  );
  const [email, setEmail] = useState(localStorage.getItem("loggedEmail") || "");
  const [password, setPassword] = useState(
    localStorage.getItem("loggedPassword") || ""
  );

  useEffect(() => {
    return () => {
      localStorage.setItem("loggedUsername", username);
      localStorage.setItem("loggedEmail", email);
      localStorage.setItem("loggedPassword", password);
    };
  }, [username, email, password]);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(true);
      event.preventDefault();
      navigate.push("/login");
    }
  };

  return (
    <div className="register-content">
      <div className="register-form container">
        <div className=" header-container d-flex justify-content-center align-items-center text-center my-3">
          <div className="header-user w-25 d-flex justify-content-center align-items-center">
            <span>
              <i className="fas fa-user user-icon mx-2"></i>
            </span>
            <h2 className="mx-2">Register</h2>
          </div>
        </div>

        <div>
          <p className="text-danger">
            Hello! Here is temporal registration, just to keep your data locally
            to allow you to connect to navigate more on the website.😂🤷‍♂️
          </p>
        </div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="validationCustom01">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="your username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              please enter your username
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationCustomUsername">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="your email"
                aria-describedby="inputGroupPrepend"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Form.Control.Feedback>Good email !</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please choose a correct email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="validationCustom02">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          {/* 
        <Form.Group controlId="validationCustom02">
          <Form.Label>Password confirmation</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="confirm your password"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group> */}

          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit" variant="success">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
}
