import React, { useState } from "react";
import auth from './../../auth'

const AddTweet = (props) => {
  const [description, setDescription] = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/tweets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/home";
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="addTweet-Container">
      <center>
        <h1>Add Tweet</h1>
      </center>
      <form className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          id="add-tweet"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {/* <button className="btn btn-primary">Tweet</button> */}
        <button
          onClick={() => {
            auth.signIn(() => {
              props.history.push("/home");
            });
          }}
          className="btn btn-success"
        >Tweet</button>
      </form>
    </div>
  );
};

export default AddTweet;
