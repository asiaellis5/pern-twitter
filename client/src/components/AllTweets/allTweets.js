import React, { useEffect, useState, useRef } from "react";
import EditTweet from "./../EditTweet/editTweet";
import Alert from 'react-bootstrap/Alert'

const AllTweets = (props) => {
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(false)

  const getUserId = () => {
    return props.users.filter(user => user.username === props.username)[0].user_id
  }

  const deleteTweet = async (id, userId) => {
    if (getUserId() === userId) {
      try {
        const deleteTweet = await fetch(`http://localhost:5000/tweets/${id}`, {
          method: "DELETE",
        });
        setTweets(tweets.filter((tweet) => tweet.tweet_id !== id));
      } catch (error) {
        console.error(error.message);
      }
    } else {
      setError(true)
    }
  };
  const getTweets = async () => {
    try {
      const response = await fetch("http://localhost:5000/tweets");
      const jsonData = await response.json();
      setTweets(jsonData);
      props.setRender(false)
    } catch (error) {
      console.error(error.message);
    }
  };



  useEffect(() => {
    getTweets();
  }, [props.render]);

  console.log(props.users)


  return (
    <div>
      <center>
        <div className="all-tweets-container">
          <Alert variant={"success"}>Welcome to Chitter {props.username}</Alert>

          <h1>Tweets</h1>
          {error &&
            <Alert variant={"danger"}>
              Not your tweet!
      </Alert>
          }

          {tweets.reverse().map((tweet) => (
            <div className="card" key={tweet.tweet_id}>
              <div className="card-body">
                <h4 className="card-title">@{
                  props.users.filter(
                    (user) => user.user_id === tweet.user_fk_id
                  )[0].username
                }</h4>
                <h4 className="card-text">{tweet.description}</h4>
                <EditTweet tweet={tweet} setRender={props.setRender} userId={getUserId()} tweetUserId={tweet.user_fk_id} />
                <button
                  className="btn btn-sm btn-outline-danger m-1"
                  onClick={() => deleteTweet(tweet.tweet_id, tweet.user_fk_id)}
                >
                  Delete
            </button>
              </div>
            </div>
          ))}
        </div>
      </center>
      <div>
      </div>
    </div >
  );
};

export default AllTweets;
