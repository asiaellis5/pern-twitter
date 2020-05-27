CREATE DATABASE twitter;
CREATE DATABASE twitter_test;

CREATE TABLE tweets(
  tweet_id SERIAL PRIMARY KEY,
  description VARCHAR(280)
);