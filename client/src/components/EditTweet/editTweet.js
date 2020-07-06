import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert'

const EditTweet = (props) => {
  const [description, setDescription] = useState(props.tweet.description);
  const [error, setError] = useState(false)

  const updateDescription = async (e) => {
    e.preventDefault();
    if (props.userId === props.tweetUserId) {
      try {
        const body = { description };
        const response = await fetch(
          `http://localhost:5000/tweets/${props.tweet.tweet_id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          }
        );
        props.setRender(true)
        // window.location = "/";
      } catch (error) {
        console.error(error.message);
      }
    } else {
      setError(true)
    }
  };
  return (
    <div className="edit-container">
      {error &&
        <Alert variant={"danger"}>
          Not your tweet to update
      </Alert>}
      <button
        type="button"
        className="btn btn-sm btn-outline-dark"
        data-toggle="modal"
        data-target={`#id${props.tweet.tweet_id}`}
      >
        Edit
      </button>

      <div
        className="modal"
        id={`id${props.tweet.tweet_id}`}
        onClick={() => setDescription(props.tweet.description)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Tweet</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setDescription(props.tweet.description)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(props.tweet.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTweet;
