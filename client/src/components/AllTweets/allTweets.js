import React, { useEffect, useState } from "react";

const AllTweets = () => {
  const [tweets, setTweets] = useState([]);
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
      <h1>Tweets</h1>
      {tweets.map((tweet) => (
        <div className="card bg-dark text-light" key={tweet.tweet_id}>
          <div className="card-body">{tweet.description}</div>
        </div>
      ))}
    </div>
  );
};

export default AllTweets;
