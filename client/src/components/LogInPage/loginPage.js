import React from "react";

const LogInPage = () => {
  return (
    <div className="login-container">
      <h1 className="text-center mt-5">Log in</h1>
      <form className="d-flex mt-5">
        <input type="text" className="form-control" value={"email"} />
        <input type="text" className="form-control" value={"password"} />
        <button className="btn btn-success">Log in</button>
      </form>
    </div>
  );
};

export default LogInPage;
