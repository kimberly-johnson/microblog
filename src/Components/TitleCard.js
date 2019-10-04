import React, { Component } from "react";
import { Link } from "react-router-dom";

class TitleCard extends Component {
  render() {
    return (
      <div className="col-sm">
        <div className="card mb-3" style={{ width: "18rem" }}>
          <div className="card-header">
            <Link to={`/${this.props.postInfo.id}`}>
              {this.props.postInfo.title}
            </Link>
          </div>
          <div className="card-body">
            <p className="card-text">{this.props.postInfo.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TitleCard;
