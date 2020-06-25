import React, { useState } from "react";


const AddTweet = (props) => {
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState("")

  const getUserId = () => {
    return props.users.filter(user => user.username === props.username)[0].user_id
  }

  console.log("addddd", getUserId())



  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`http://localhost:5000/tweets/${getUserId()}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      props.setRender(true)

    } catch (error) {
      console.error(error.message);
    }
    setDescription("")
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
        <button

          className="btn btn-success"
        >Tweet</button>
      </form>
    </div>
  );
};

export default AddTweet;
