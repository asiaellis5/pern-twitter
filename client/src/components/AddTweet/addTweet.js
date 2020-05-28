import React from "react";

const AddTweet = () => {
  return (
    <div className="addTweet-Container">
      <h1>Add Tweet</h1>
      <form>
        <input type="text" className="form-control" value={"Add Tweet"} />
        <button className="btn btn-success">Tweet</button>
      </form>
    </div>
  );
};

export default AddTweet;
