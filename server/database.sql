CREATE DATABASE twitter;
CREATE DATABASE twitter_test;

CREATE TABLE tweets(
  tweet_id SERIAL PRIMARY KEY,
  description VARCHAR(280)
);

CREATE TABLE Users
(
  user_id SERIAL Primary Key,
  email varchar(255) ,
  username varchar(255) ,
  password varchar(255),
  UNIQUE (email),
  UNIQUE(username)
);

ALTER TABLE tweets
ADD COLUMN user_fk_id INTEGER;

ALTER TABLE tweets
ADD CONSTRAINT constraint_fk FOREIGN KEY (user_fk_id) REFERENCES Users
(user_id)
ON
DELETE CASCADE;