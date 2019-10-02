import React, { Component } from "react";

class Comment extends Component {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
  }

  delete() {
    console.log("delete")
  }

  render() {
    return (
      <div>
        <span>{this.props.comment}</span>
        <button onClick={this.delete}>X</button>
      </div>
    );
  }
}

export default Comment;