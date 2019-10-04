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
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
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

  upvote(id){
    this.props.sendVoteToAPI("up", id);
  }

  downvote(id){
    this.props.sendVoteToAPI("down", id);
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
    if (this.props.error) {
      return <h1>Something bad happened. Try again later...</h1>;
    }
    const id = Number(this.props.match.params.id);
    console.log("this.props.title in postdetail", this.props.title);
    return (
      <div>
        <div className="card">
          {this.renderPost()}
          <span>
            <button
              type="button"
              className="btn btn-link mx-3"
              data-toggle="tooltip"
              data-placement="bottom"
              title="edit post"
              onClick={this.renderForm}
            >
              <i className="fas fa-edit" style={{ color: "blue" }}></i>
            </button>
            <button
              type="button"
              className="btn btn-link mx-3"
              data-toggle="tooltip"
              data-placement="bottom"
              title="delete post"
              onClick={() => this.delete(id)}
            >
              <i className="fas fa-times" style={{ color: "red" }}></i>
            </button>

            <p className="ml-3">
              {this.props.currentPost.votes} votes:
              <button className="btn btn-link">
                <i
                  className="fas fa-arrow-up mx-1"
                  style={{ color: "green" }}
                  onClick={()=>this.upvote(id)}
                ></i>
              </button>
              <button className="btn btn-link">
                <i
                  className="fas fa-arrow-down mx-1"
                  style={{ color: "red" }}
                  onClick={()=>this.downvote(id)}
                ></i>
              </button>
            </p>
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
              title={this.props.currentPost.title}
              description={this.props.currentPost.description}
              body={this.props.currentPost.body}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default PostDetail;
