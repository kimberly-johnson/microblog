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
          onClick={() => this.delete(this.props.postID, this.props.commentID)}
        >
          X
        </button>
      </div>
    );
  }
}

export default Comment;
