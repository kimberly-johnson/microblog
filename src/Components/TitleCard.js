import React, { Component } from "react";
import { Link } from "react-router-dom";

class TitleCard extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <li>
          <Link to="/:id">{this.props.postInfo.title}</Link>
          <p>{this.props.postInfo.description}</p>
        </li>
      </div>
    );
  }
}

export default TitleCard;