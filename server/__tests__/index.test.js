const app = require("./../index");
const supertest = require("supertest");
const request = supertest(app);
const pool = require("./../test_db.js");

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
