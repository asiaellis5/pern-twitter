import React, { useImperativeHandle } from "react";
import { Link } from "react-router-dom";

const PrimaryPage = () => {
  return (
    <Link to="/login">
      <button className="btn btn-success">Log in</button>
    </Link>
  );
};

export default PrimaryPage;
