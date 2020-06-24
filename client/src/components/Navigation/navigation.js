import React, { Fragment, useState, useEffect } from "react";

const Navigation = (props) => {
  console.log("navbaarrr", props.username)
  return (
    <Fragment>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/home">
            Chitter
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse">
          </div>
          {props.auth &&
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Sign Out
      </a>
              </li>
            </ul>
          }
        </nav>
      </div>
    </Fragment>
  );
};

export default Navigation;