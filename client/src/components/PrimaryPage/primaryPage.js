import React, { useImperativeHandle } from "react";
import { Link } from "react-router-dom";
import classes from "./primaryPage.module.css";

const PrimaryPage = () => {
  return (
    <div className={classes.primaryContainer}>
      <h1>Welcome to Chitter</h1>
      <Link to="/login">
        <button className="btn btn-success m-3">Log in</button>
      </Link>
      <Link to="/signup">
        <button className="btn btn-success m-3">Sign Up</button>
      </Link>
    </div>
  );
};

export default PrimaryPage;
