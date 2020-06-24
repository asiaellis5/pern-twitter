import React from "react";
import AddTweet from "./../AddTweet/addTweet";
import AllTweets from "./../AllTweets/allTweets";

const HomePage = (props) => {
  console.log("homeeee", props.username)
  return (
    <div id="homepage-container">
      <AddTweet />
      <br></br>
      <AllTweets username={props.username} />
    </div>
  );
};

export default HomePage;
