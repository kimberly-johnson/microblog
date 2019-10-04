import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "" || this.props.title,
      description: "" || this.props.description,
      body: ""|| this.props.body
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.edit === "editForm"
      ? this.props.editPostInAPI(this.props.id, this.state)
      : this.props.addPostToAPI(this.state);
    this.props.history.push("/");
  }

  cancel(e) {
    e.preventDefault();
    this.props.history.push("/");
  }

  render() {
    console.log("this.props.title", this.props.title);
    return (
      <div>
        <form className="m-3">
          <div className="form-group">
            <label>Title:</label>
            <input
              className="form-control"
              onChange={this.handleChange}
              type="text"
              name="title"
              value={this.state.title}
            ></input>
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input
              className="form-control"
              onChange={this.handleChange}
              type="text"
              name="description"
              value={this.state.description}
            ></input>
          </div>
          <div className="form-group">
            <label>Body:</label>
            <input
              className="form-control"
              onChange={this.handleChange}
              type="text"
              name="body"
              value={this.state.body}
            ></input>
          </div>
          <button disabled={Object.values(this.state).some(x => x==="")} className="btn btn-primary" onClick={this.handleSubmit}>
            Save
          </button>
          <button className="btn btn-secondary mx-2" onClick={this.cancel}>
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default PostForm;
