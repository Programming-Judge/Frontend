import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./Authentication.jsx"
const Login = () => {

  return (
    <div>
      <center>
        <h1>Login</h1>
      </center>
      
      <LoginForm />
    </div>
  );
};

export default Login;
