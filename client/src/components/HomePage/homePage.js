import React from "react";
import AddTweet from "./../AddTweet/addTweet";
import AllTweets from "./../AllTweets/allTweets";

const HomePage = () => {
  return (
    <div>
      <h1>Twitter</h1>
      <AddTweet />
      <AllTweets />
    </div>
  );
};

export default HomePage;
