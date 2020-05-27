const Pool = require("pg").Pool;

const pool = new Pool({
  user: "asiaellis",
  host: "localhost",
  port: 5432,
  database: "twitter",
});

module.exports = pool;
