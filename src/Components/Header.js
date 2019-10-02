import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Microblog</h1>
        <h3>Get in the Rithm of blogging!</h3>
        <NavLink to="/">Blog</NavLink>
        <NavLink to="/new">Add a new post</NavLink>
      </div>
    );
  }
}

export default Header;