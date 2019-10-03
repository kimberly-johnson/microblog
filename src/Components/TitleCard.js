import React, { Component } from "react";
import { Link } from "react-router-dom";

class TitleCard extends Component {
  render() {
    return (
      <div className="col-sm">
        <div className="card mb-3" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">
              <Link to={`/${this.props.postInfo.id}`}>
                {this.props.postInfo.title}
              </Link>
            </h5>
            <p className="card-text">{this.props.postInfo.description}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">votes will go here</small>
          </div>
        </div>
      </div>
    );
  }
}

export default TitleCard;
