import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron mx-3">
          <h1 className="display-4">Microblog</h1>
          <p className="lead">Get in the Rithm of blogging!</p>
          <button className="btn btn-link">
            <NavLink to="/">Blog</NavLink>
          </button>
          <button className="btn btn-link">
            <NavLink to="/new">Add a new post</NavLink>
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
