import React, { Fragment, useState, useEffect } from "react";

const Navigation = (props) => {
  console.log("navbaarrr", props.username)
  return (
    <Fragment>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/home">
            <img
              src="https://vignette.wikia.nocookie.net/logopedia/images/9/99/Twitter_2012.svg/revision/latest/scale-to-width-down/340?cb=20180321032720"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
              loading="lazy"
            />
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