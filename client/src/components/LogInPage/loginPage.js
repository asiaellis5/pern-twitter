import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./../HomePage/homePage";

const LogInPage = () => {
  return (
    <Router>
      <div className="login-container">
        <h1 className="text-center mt-5">Log in</h1>
        <form className="d-flex mt-5">
          <input type="text" className="form-control" value={"email"} />
          <input type="text" className="form-control" value={"password"} />
          <Link to={"/tweets"} className="nav-link btn btn-success">
            Log in
          </Link>
        </form>
        <Switch>
          <Route path="/tweets" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default LogInPage;
