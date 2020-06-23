import React, { useState } from "react";
import auth from './../../auth'

const LogInPage = (props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { password: password };
      const response = await fetch(`http://localhost:5000/users/${username}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      // window.location = "/home";
    } catch (error) {
      console.error(error.message);
    }
    auth.signIn(() => {
      props.history.push("/home");
    });
  }

  return (
    <div className="login-container">
      <h1 className="text-center mt-5">Log in</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input type="text" className="form-control" placeholder="Username" onChange={(event) => setUsername(event.target.value)} />
        <input type="text" className="form-control" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
        <button
          className="btn btn-success"
        >
          Log In
      </button>
      </form>
    </div>
  );
};

export default LogInPage;
