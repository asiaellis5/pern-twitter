import React from "react";
import AddTweet from "./../AddTweet/addTweet";
import AllTweets from "./../AllTweets/allTweets";

const HomePage = () => {
  return (
    <div id="homepage-container">
      <AddTweet />
      <br></br>
      <AllTweets />
    </div>
  );
};

export default HomePage;
