import React, { useState } from "react";

const AddTweet = () => {
  const [description, setDescription] = useState("");
  return (
    <div className="addTweet-Container">
      <h1>Add Tweet</h1>
      <form>
        <input
          type="text"
          id="add-tweet"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Tweet</button>
      </form>
    </div>
  );
};

export default AddTweet;
