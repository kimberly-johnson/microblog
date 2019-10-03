import React, { Component } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

class CommentsList extends Component {

  render() {
    console.log("this.props.comments", this.props.comments);
    let comments = this.props.comments.map(com => <Comment comment={com} />)
    console.log("comments are", comments);
    
    return (
      <div>
        <ul>
          {comments}
        </ul>
        <CommentForm postID={this.props.postID} addCommentToAPI={this.props.addCommentToAPI}/>
      </div>
    );
  }
}

export default CommentsList;