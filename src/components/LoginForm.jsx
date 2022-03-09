import React, { useState } from "react";
import axios from "axios";
import "./styles/LoginForm.css";
import qs from 'qs'

const initialForm = Object.freeze({
  username:"",
  password:""
});

const LoginForm = () => {
  const [formData, updateFormData] = useState(initialForm);
  //console.log(formData);

  const [login, loginForm] = useState();
  const [loginMessage, setLoginMessage] = useState();

  const handleChange = (e) => {

    updateFormData({
      ...formData, 
      [e.target.name]: e.target.value.trim()
    });
  };

  const submitResponse = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/auth/login", qs.stringify(formData), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        formData: qs.stringify(formData),
      })
      .then((resp) => {
        if (resp.status === 200) {
          console.log("Logged in");
        }
        else if (resp.status === 401) {
          console.log("login failed");
        }
        setLoginMessage(resp.data.message);
      });
  }; 
 
  const validateForm = () => {
    return login != null;
  };

  return (
    <div className="LoginForm">
      <form>
        Username: 
        <input
          type="username" name="username" required onChange={handleChange}
        ></input> <br/><br/>
        Password:
        <input
          type="password" name="password" required onChange={handleChange}
        ></input>
        <br /> <br />
        <button onClick={submitResponse}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
