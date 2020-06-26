import React, { useEffect, useState, useRef } from "react";
import EditTweet from "./../EditTweet/editTweet";

const AllTweets = (props) => {
  const [tweets, setTweets] = useState([]);

  console.log(props.users)

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
      setTweets(jsonData.reverse());
      props.setRender(false)
    } catch (error) {
      console.error(error.message);
    }
  };



  useEffect(() => {
    getTweets();
  }, [props.render]);

  return (
    <div>
      <center>
        <div className="all-tweets-container">

          <h1>Tweets</h1>

          {tweets.reverse().map((tweet) => (
            <div className="card" key={tweet.tweet_id}>
              <div className="card-body">
                <h4 className="card-title">@{
                  props.users.filter(
                    (user) => user.user_id === tweet.user_fk_id
                  )[0].username
                }</h4>
                <h4 className="card-title">{tweet.description}</h4>
                <p className="card-text">{}</p>
                <EditTweet tweet={tweet} setRender={props.setRender} />
                <button
                  className="btn btn-danger m-1"
                  onClick={() => deleteTweet(tweet.tweet_id)}
                >
                  Delete
            </button>
              </div>
            </div>
          ))}
        </div>
      </center>
    </div >
  );
};

export default AllTweets;
