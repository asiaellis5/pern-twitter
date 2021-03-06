const app = require("./../index");
const supertest = require("supertest");
const request = supertest(app);
const pool = require("./../test_db.js");



describe("posts", () => {

  beforeAll(() => {
    pool.query(
      "INSERT INTO Users (user_id, email,username,password) VALUES (1, 'email@example.com', 'test', 'password')"
    );
  });

  afterAll(() => {
    pool.query("TRUNCATE TABLE tweets;");
  });

  it("posts to /tweets/1", async (done) => {
    const res = await request
      .post("/tweets/1")
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

  it("gets a single tweet from /tweets", async (done) => {
    const addTweet = await request
      .post("/tweets/1")
      .send({ description: "Another test tweet" });
    const tweets = await request.get("/tweets").then((response) => {
      return response.body[1].tweet_id;
    });
    const res = await request
      .get(`/tweets/${tweets}`)

      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.description).toBe("Another test tweet");
      });
    done();
  });

  it("updates a from /tweets/:id", async (done) => {
    const tweets = await request.get("/tweets").then((response) => {
      return response.body[0].tweet_id;
    });
    const res = await request
      .put(`/tweets/${tweets}`)
      .send({ description: "new test tweet" })

      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual("Tweet was updated");
      });

    const updated = await request.get("/tweets").then((response) => {
      expect(response.body[1].description).toEqual("new test tweet");
    });
    done();
  });

  it("deletes a tweets from /tweets/:id", async (done) => {
    const tweets = await request.get("/tweets").then((response) => {
      return response.body[0].tweet_id;
    });
    const res = await request
      .delete(`/tweets/${tweets}`)

      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual("Tweet was deleted");
      });

    const deleted = await request.get("/tweets").then((response) => {
      console.log(response.body);
      expect(response.body.length).toEqual(1);
      expect(response.body).not.toContain({
        tweet_id: `${tweets}`,
        description: "test tweet",
      });
    });
    done();
  });

})

describe("users", () => {
  beforeAll(() => {
    pool.query("DELETE FROM users WHERE user_id > 0;");
  });

  it("posts to /users", async (done) => {

    const res = await request
      .post("/users")
      .send({
        email: "test@test.com",
        username: "username",
        password: "password"
      })

      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.username).toBe("username");
      });
    done();
  });

  it("gets the users", async (done) => {
    const res = await request
      .get("/users")

      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toEqual(1);
      });
    done();
  })
})

