import React, { useState, useEffect } from "react";
import AddTweet from "./../AddTweet/addTweet";
import AllTweets from "./../AllTweets/allTweets";

const HomePage = (props) => {
  const [users, setUsers] = useState("")
  const [render, setRender] = useState(false)

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/users");
      const jsonData = await response.json();
      setUsers(jsonData.reverse());
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {users &&
        <div id="homepage-container">

          <AddTweet setRender={setRender} auth={props.auth} username={props.username} users={users} />
          <br></br>

          <AllTweets users={users} username={props.username} render={render} setRender={setRender} />
        </div>
      }
    </div>
  );
};

export default HomePage;
