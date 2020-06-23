import React, { useState } from "react";
import auth from './../../auth'
import Alert from 'react-bootstrap/Alert'

const SignUpPage = (props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { email: email, username: username, password: password };
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      let authenticate = await response.json().then((data) => data);
      if (authenticate === "Failed") {
        setError(true)
      } else {
        auth.signIn(() => {
          props.history.push("/home");
        });
      }
    } catch (error) {
      console.error(error.message);

    }

  };


  return (
    <div className="login-container">
      <h1 className="text-center mt-5">Sign Up</h1>
      {error &&
        <Alert variant={"danger"}>
          That username or email already has an account
      </Alert>}
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          className="form-control"
          type="text"
          required
          placeholder="Enter a Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          className="form-control"
          type="email"
          required
          placeholder="Enter a Valid Email Address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="form-control"
          type="password"
          required
          placeholder="Enter a Secure Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="btn btn-success" >Sign up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
