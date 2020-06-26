import React, { useState } from "react";
import auth from './../../auth'
import Alert from 'react-bootstrap/Alert'
import { Link } from "react-router-dom";

const LogInPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { password: password };
      const response = await fetch(`http://localhost:5000/users/${username}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      let authenticate = await response.json().then((data) => data);
      if (authenticate === true) {
        auth.signIn(() => {
          props.history.push("/home")
        });
        props.auth(true)
        props.username(username)
      } else {
        setError(true)
      }
    } catch (error) {
      console.error(error.message);
    }

  }

  return (
    <div className="login-container">
      <h1 className="text-center mt-5">Log in</h1>
      {error &&
        <Alert variant={"danger"}>
          Invalid username or password, please check and try again
      </Alert>}
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input type="text" className="" placeholder="Username" onChange={(event) => setUsername(event.target.value)} />
        <input type="text" className="" placeholder="Password" type="password" onChange={(event) => setPassword(event.target.value)} />
        <button
          className="btn btn-outline-success"
        >
          Log In
      </button>
      </form>
      <center>
        <Link to="/signup">
          <button className="btn btn-outline-success m-3">Dont have an account, click here to sign up</button>
        </Link>
      </center>
    </div>
  );
};

export default LogInPage;
