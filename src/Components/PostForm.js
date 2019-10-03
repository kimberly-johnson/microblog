import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      body: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  //save to database
  handleSubmit(e) {
    e.preventDefault();
    console.log("this.state is", this.state);
    this.props.addPostToAPI(this.state);
    this.props.history.push("/");
    console.log("post added");
  }

  cancel(e) {
    e.preventDefault();
    this.props.history.push("/");
    console.log("post cancelled");
  }

  render() {
    return (
      <div>
        <form>
          <label>Title:</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="title"
            value={this.state.title}>
          </input>
          <label>Description:</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="description"
            value={this.state.description}>
          </input>
          <label>Body:</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="body"
            value={this.state.body}>
          </input>
          <button onClick={this.handleSubmit}>Save</button>
          <button onClick={this.cancel}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default PostForm;