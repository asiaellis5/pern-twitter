import React, { useEffect, useState } from "react";

const AllTweets = () => {
  const [tweets, setTweets] = useState([]);

  const deleteTweet = async (id) => {
    try {
      const deleteTweet = await fetch(`http://localhost:5000/tweets/${id}`, {
        method: "DELETE",
      });
      setTweets(tweets.filter((tweet) => tweet.tweet_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };
  const getTweets = async () => {
    try {
      const response = await fetch("http://localhost:5000/tweets");
      const jsonData = await response.json();
      setTweets(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getTweets();
  }, []);

  return (
    <div className="all-tweets-container">
      <center>
        <h1>Tweets</h1>
      </center>
      {tweets.map((tweet) => (
        <div className="card bg-light text-dark mb-2" key={tweet.tweet_id}>
          <div className="card-body text-center">{tweet.description}</div>
          <button className="btn btn-warning btn-small">Update</button>
          <button
            className="btn btn-danger"
            onClick={() => deleteTweet(tweet.tweet_id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllTweets;
