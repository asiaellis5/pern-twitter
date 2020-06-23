import React, { Fragment } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/home">
            Twitter
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

          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item active">
              <a className="nav-link" href="/sign_out">
                Sign Out
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navigation;