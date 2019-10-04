import React, { Component } from "react";
import CommentList from "./CommentsList";
import FormContainer from "../Containers/FormContainer";

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: ""
    };

    this.renderForm = this.renderForm.bind(this);
    this.renderPost = this.renderPost.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    const id = Number(this.props.match.params.id);
    this.props.getPostFromAPI(id);
    this.props.getCommentsFromAPI(id);
  }

  edit(id) {
    this.props.editPostInAPI(id);
  }

  delete(id) {
    this.props.removePostsFromAPI(id);
    this.props.history.push("/");
  }

  renderPost() {
    const post = this.props.currentPost;

    if (this.props.currentPost["title"]) {
      return (
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <h6 className="card-subtitle">{post.description}</h6>
          <p className="card-text">{post.body}</p>
        </div>
      );
    } else {
      return <p>loading...</p>;
    }
  }

  renderForm() {
    this.setState({ editForm: "editForm" });
  }

  render() {
    const id = Number(this.props.match.params.id);

    return (
      <div>
        <div className="card">
          {this.renderPost()}
          <span>
            <button
              type="button"
              className="btn btn-light mx-3"
              data-toggle="tooltip"
              data-placement="bottom"
              title="edit post"
              onClick={this.renderForm}
            >
              <i className="fas fa-edit" style={{ color: "blue" }}></i>
            </button>
            <button
              type="button"
              className="btn btn-light mx-3"
              data-toggle="tooltip"
              data-placement="bottom"
              title="delete post"
              onClick={() => this.delete(id)}
            >
              <i className="fas fa-times" style={{ color: "red" }}></i>
            </button>
          </span>
          <hr></hr>
          <div className="comments mx-3">
            <h5>Comments:</h5>
            <CommentList
              postID={id}
              comments={this.props.comments}
              addCommentToAPI={this.props.addCommentToAPI}
              getCommentsFromAPI={this.props.getCommentsFromAPI}
              removeCommentFromAPI={this.props.removeCommentFromAPI}
            />
          </div>
          {this.state.editForm === "editForm" ? (
            <FormContainer
              edit={this.state.editForm}
              id={id}
              history={this.props.history}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default PostDetail;
