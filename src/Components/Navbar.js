import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar-container">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
          <Link className="navbar-brand" to="/">
            <img
              src="https://nitw.ac.in/cii/static/media/nitwlogo.db356830.png"
              className="navbar-logo m-1"
            alt=""/>
            <img
              src="https://nitw.ac.in/cii/static/media/C4II.216ba44d.png"
              className="navbar-logo m-1"
              alt=""/>
            <img
              src="https://media-exp1.licdn.com/dms/image/C560BAQFX5fIjAMHKlA/company-logo_200_200/0/1624861260766?e=1668038400&v=beta&t=yuA_YyCmwbzj19q5xhCw2UuHCAhvKp9U8xZsMNQoRjw"
              className="navbar-logo m-1"
              alt=""/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <Link className="nav-link active" id="navItem1" to="/">
                HOME
                <span className="sr-only">(current)</span>
              </Link>
              <Link className="nav-link" to="/projects" id="navItem3">
                PROJECTS
              </Link>
              <Link className="nav-link" to="/startups" id="navItem2">
                START UPS
              </Link>
              <Link className="nav-link" to="/podcasts" id="navItem2">
                PODCASTS
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
