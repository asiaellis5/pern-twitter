const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require('bcrypt')
const port = process.env.NODE_ENV == "test" ? 5001 : 5000;
let pool;

if (process.env.NODE_ENV === "test") {
  pool = require("./test_db");
} else {
  pool = require("./db");
}

app.use(cors());
app.use(express.json());

// ROUTES //

// create a tweet

app.post("/tweets/:id", async (req, res) => {
  try {
    const { description } = req.body;
    const { id } = req.params;
    const newTweet = await pool.query(
      "INSERT INTO tweets (description, user_fk_id) VALUES ($1, $2) RETURNING * ",
      [description, id]
    );

    res.json(newTweet.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get tweets

app.get("/tweets", async (req, res) => {
  try {
    const allTweets = await pool.query("SELECT * FROM tweets;");

    res.json(allTweets.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a single tweet

app.get("/tweets/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tweet = await pool.query("SELECT * FROM tweets WHERE tweet_id = $1", [
      id,
    ]);

    res.json(tweet.rows[0]);
  } catch (err) {
    console.error(err.messsage);
  }
});

// update a tweet

app.put("/tweets/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const updateTweet = await pool.query(
      "UPDATE tweets SET description = $1 WHERE tweet_id = $2",
      [description, id]
    );

    res.json("Tweet was updated");
  } catch (err) {
    console.error(err.messsage);
  }
});

// delete a tweet

app.delete("/tweets/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTweet = await pool.query(
      "DELETE FROM tweets WHERE tweet_id= $1",
      [id]
    );

    res.json("Tweet was deleted");
  } catch (error) {
    console.error(error);
  }
});

// USERS

app.get("/users", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM Users");
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err);
  }
});


app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tweet = await pool.query("SELECT * FROM Users WHERE user_id = $1", [
      id,
    ]);

    res.json(tweet.rows[0]);
  } catch (err) {
    console.error(err.messsage);
  }
});



app.post("/users", async (req, res) => {
  try {
    const { email } = req.body;
    const { username } = req.body;
    const { password } = req.body;
    const newUser = await pool.query(
      "INSERT INTO Users (email, username, password) VALUES($1,$2,$3) RETURNING *",
      [email, username, password]
    );
    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err);
    res.json("Failed")
  }
});

app.post("/users/:username", async (req, res) => {
  try {
    const { username } = req.params
    const user = await pool.query("SELECT * FROM Users WHERE username = $1", [
      username,
    ]);
    const { password } = req.body
    if (user.rows[0]) {
      let auth = user.rows[0].password === password;
      if (auth) {
        res.json(auth);
      } else {
        res.json("Failed");
      }
    } else {
      res.json("Failed");
    }
  } catch (err) {
    console.error(err);
  }
});


app.listen(port, () => {
  console.log(`server has started on port ${port}`);
});

module.exports = app;
