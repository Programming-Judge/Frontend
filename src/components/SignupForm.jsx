import React, { useState } from "react";
import axios from "axios";
import "./styles/SignupForm.css";
import qs from 'qs'

const initialForm = Object.freeze({
  username:"",
  password:""
});

const SignupForm = () => {
  const [formData, updateFormData] = useState(initialForm);
  //console.log(formData);

  const [signup, signupForm] = useState();
  const [signupMessage, setSignupMessage] = useState();

  const handleChange = (e) => {

    updateFormData({
      ...formData, 
      [e.target.name]: e.target.value.trim()
    });
  };

  const submitResponse = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/auth/register", qs.stringify(formData), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        formData: qs.stringify(formData),
      })
      .then((resp) => {
        if (resp.status === 200) {
          console.log("Signed up successfully");
        }
        else if (resp.status === 401) {
          console.log("Signup failed");
        }
        setSignupMessage(resp.data.message);
      });
  }; 
 
  const validateForm = () => {
    return signup != null;
  };

  return (
    <div className="SignupForm">
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
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
