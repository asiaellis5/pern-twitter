import React, { useImperativeHandle } from "react";
import { Link } from "react-router-dom";

const PrimaryPage = () => {
  return (
    <div>
      <Link to="/login">
        <button className="btn btn-success">Log in</button>
      </Link>
      <Link to="/signup">
        <button className="btn btn-success">Sign Up</button>
      </Link>
    </div>
  );
};

export default PrimaryPage;
