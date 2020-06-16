import React, { useImperativeHandle } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="login-container">
      <h1 className="text-center mt-5">Sign Up</h1>
      <form className="d-flex mt-5">
        <input type="text" className="form-control" value={"email"} />
        <input type="text" className="form-control" value={"password"} />
        <Link to="/home">
          <button className="btn btn-success">Sign up</button>
        </Link>
      </form>
    </div>
  );
};

export default SignUpPage;
