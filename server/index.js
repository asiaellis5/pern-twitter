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
    const newTodo = await pool.query(
      "INSERT INTO tweets (description) VALUES ($1) RETURNING * ",
      [description]
    );

    res.json(newTodo.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// get tweets

app.get("/tweets", async (req, res) => {
  try {
    const allTweets = await pool.query("SELECT * FROM todo;");

    res.json(allTweets.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// get a single tweet

// update a tweet

// delete a tweet

app.listen(port, () => {
  console.log(`server has started on port ${port}`);
});

module.exports = app;
