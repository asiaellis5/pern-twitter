const Pool = require("pg").Pool;

const pool = new Pool({
  user: "asiaellis",
  host: "localhost",
  port: 5432,
  database: "twitter_test",
});

module.exports = pool;
