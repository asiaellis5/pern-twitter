import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from './../../auth'

const LogInPage = (props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <h1 className="text-center mt-5">Log in</h1>
      <form className="d-flex mt-5">
        <input type="text" className="form-control" placeholder="Username" onChange={(event) => setUsername(event.target.value)} />
        <input type="text" className="form-control" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
        <input type="text" className="form-control" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
        <button
          onClick={() => {
            auth.signIn(() => {
              props.history.push("/home");
            });
          }}
          className="btn btn-success"
        >
          Log In
      </button>
      </form>
    </div>
  );
};

export default LogInPage;
