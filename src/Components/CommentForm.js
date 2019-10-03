import React, { Component } from "react";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newComment: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addCommentToAPI(this.props.postID, this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-inline m-auto">
          <div className="form-group mb-2">
            <input 
              className="form-control"
              name="newComment"
              type="text"
              value={this.state.newComment}
              placeholder="new comment"
              onChange={this.handleChange}
            ></input>
            <button className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentForm;
