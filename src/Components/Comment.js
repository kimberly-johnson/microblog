import React, { Component } from "react";

class Comment extends Component {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
  }

  delete(postID, commentID) {
    this.props.removeCommentFromAPI(postID, commentID);
  }

  render() {
    return (
      <div>
        <span>{this.props.comment.text}</span>
        <button
          className="btn btn-link"
          onClick={() => this.delete(this.props.postID, this.props.commentID)}
        >
          <i className="fas fa-times" style={{color: "red"}}></i>
        </button>
      </div>
    );
  }
}

export default Comment;
