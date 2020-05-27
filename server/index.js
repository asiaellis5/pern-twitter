const express = require("express");
const app = express();
const cors = require("cors");
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

app.post("/tweets", async (req, res) => {
  try {
    const { description } = req.body;
    const newTweet = await pool.query(
      "INSERT INTO tweets (description) VALUES ($1) RETURNING * ",
      [description]
    );

    res.json(newTweet.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// get tweets

app.get("/tweets", async (req, res) => {
  try {
    const allTweets = await pool.query("SELECT * FROM tweets;");

    res.json(allTweets.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// get a single tweet

app.get("/tweets/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);

    res.json(todo.rows[0]);
  } catch (error) {
    console.error(error.messsage);
  }
});

// update a tweet

app.put("/tweets/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );

    res.json("Tweet was updated");
  } catch (err) {
    console.error(err.messsage);
  }
});

// delete a tweet

app.listen(port, () => {
  console.log(`server has started on port ${port}`);
});

module.exports = app;
