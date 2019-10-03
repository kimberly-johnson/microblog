import React, { Component } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

class CommentsList extends Component {
  render() {
    let comments = this.props.comments.map(com => (
      <Comment
        comment={com}
        commentID={com.id}
        postID={this.props.postID}
        removeCommentFromAPI={this.props.removeCommentFromAPI}
      />
    ));

    return (
      <div>
        <ul>{comments}</ul>
        <CommentForm
          postID={this.props.postID}
          addCommentToAPI={this.props.addCommentToAPI}
        />
      </div>
    );
  }
}

export default CommentsList;
