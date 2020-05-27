const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

// ROUTES //

// create a tweet

// get tweets

// get a single tweet

// update a tweet

// delete a tweet

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
