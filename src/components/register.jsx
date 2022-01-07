import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch("/api/register/", {
        method: "POST",
        body: JSON.stringify({
          Username: username,
          Password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        console.log("Registration failed");
      } else {
        console.log(data.jwt);
        history("/home");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="Register">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Register
        </Button>
        <Form.Group size="lg" controlId="register">
          <Form.Label>Already have an account?&nbsp;</Form.Label>
          <Link to="/login">Login</Link>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Register;
