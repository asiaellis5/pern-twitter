# Pern-twitter

A full stack PERN application, created with a react frontend and connected to a Node.Js, Express and PostgreSQL database. Exploring RESTful Api's in a CRUD (Create, Read, Update and Delete) App that allows users to sign up or sign in, make, edit and delete posts and view their posts and other people posts.

Using Node.js and Express.js to create a RESTful API in the backend with a PostgreSQL database for storing both users and tweets. Connected to a single page react app in the frontend. And tested with Jest and Enzyme in both the front and the backend.

## How to Run

Clone this repository on to your machine and make sure that you have node installed.

Once you have the repository cloned make sure that you have postgresql installed correctly, if you are using a Mac and have homebrew managaer installed you can install this by running:

```
brew install postgresql
```

Once you have all this installed navigate into both the server file and the client file separately and run:

```
npm install
```

to install all the dependencies in both the front and the backend.

Then navigate into the server file and open up PostgreSQL in the command line by running:

```
psql
```

Then open up the `database.sql`  copy each of the commands into psql, starting by creating the database and the test database and then the tweets table and the users table into both.

Once you have your databases set up navigate to the `db.js` and `test_db.js` files and update the information with your username and password if required.

Then to start the server, from within the server folder, in the command line run:

```
nodemon
```

And this should then tell you that the backend server is running on port 5000. 

If this is the case, navigate into the client folder and run:

```
npm start
```

This will start the React frontend appication and user interface. You can then use the application from localhost3000, which should open in your browser.

You will then be able to sign up and tweet!

## How to run the tests

To run the testing suite, navigate into either the `server` or `client` directories and run:

```
npm test
```

in the command line.
