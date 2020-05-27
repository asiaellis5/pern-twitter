const app = require("./../index");
const supertest = require("supertest");
const request = supertest(app);
const pool = require("./../test_db.js");

let tweets;

beforeAll(() => {
  process.env.NODE_ENV = "test";
});

afterAll(() => {
  pool.query("TRUNCATE TABLE tweets;");
});

it("posts to /tweets", async (done) => {
  const res = await request
    .post("/tweets")
    .send({ description: "test tweet" })

    .then((response) => {
      expect(response.statusCode).toBe(200);
      expect(response.body[0].description).toBe("test tweet");
    });

  done();
});

it("gets from /tweets", async (done) => {
  const res = await request
    .get("/tweets")

    .then((response) => {
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toEqual(1);
    });

  done();
});

// it("updates a tweet", async (done) => {
//   const tweets = await pool.query("SELECT * FROM tweets");
//   const id = tweets.rows[0].tweet_id;
//   const res = await request
//     .put(`/tweets/${id}`)
//     .send({ description: "new test tweet" })

//     .then((response) => {
//       expect(response.statusCode).toBe(200);
//       expect(response.body[0].description).toBe("new test tweet");
//     });

//   done();
// });
