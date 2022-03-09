import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div>
        <Link className="navbar-brand" to="/">
          Dashboard
        </Link>
      </div>
      <div>
        <Link className="btn btn-light my-2 my-sm-0 text-dark" to="/problemset">
          Problems
        </Link>
        <Link className="btn btn-light my-2 my-sm-0 text-dark" to="/login">
          Login
        </Link>
        <Link className="btn btn-light my-2 my-sm-0 text-dark" to="/signup">
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
