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
    this.props.getPostsFromAPI();
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
    const id = Number(this.props.match.params.id);
    const post = this.props.posts.filter(post => post.id === id)[0];

    if (this.props.posts.length) {
      return (
        <div>
          <h2>{post.title}</h2>
          <h5>{post.description}</h5>
          <p>{post.body}</p>
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
        <div className="post">
          {this.renderPost()}
          <button onClick={this.renderForm}>Edit</button>
          <button onClick={() => this.delete(id)}>Delete</button>
        </div>
        <div className="comments">
          <CommentList
            postID={id}
            comments={this.props.comments}
            addCommentToAPI={this.props.addCommentToAPI}
            getCommentsFromAPI={this.props.getCommentsFromAPI}
            removeCommentFromAPI={this.props.removeCommentFromAPI}
          />
        </div>
        {this.state.editForm === "editForm" ? (
          <FormContainer edit={this.state.editForm} id={id} />
        ) : null}
      </div>
    );
  }
}

export default PostDetail;
