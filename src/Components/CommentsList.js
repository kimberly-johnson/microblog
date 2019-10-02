import React, { Component } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

class CommentsList extends Component {
  render() {
    const comments = ["I like blue", "Blue is also my fav color."];

    return (
      <div>
        <ul>
          {comments.map(com => <Comment comment={com}/>)}
        </ul>
        <CommentForm />
      </div>
    );
  }
}

export default CommentsList;