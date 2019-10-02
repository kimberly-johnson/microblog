import React, { Component } from "react";
import CommentList from "./CommentsList";

class PostDetail extends Component {
  constructor(props) {
    super(props);

    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
  }

  edit() {
    console.log("edit")
  }

  delete() {
    this.props.history.push("/");
    console.log("delete")
  }

  render() {
    return (
      <div>
        <div className="post">
          <h2>Title</h2>
          <h5>Description</h5>
          <p>body</p>
          <button onClick={this.edit}>Edit</button>
          <button onClick={this.delete}>Delete</button>
        </div>
        <div className="comments">
          <CommentList />
        </div>
      </div>
    );
  }
}

export default PostDetail;