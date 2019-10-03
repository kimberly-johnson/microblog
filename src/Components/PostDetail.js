import React, { Component } from "react";
import CommentList from "./CommentsList";

class PostDetail extends Component {
  constructor(props) {
    super(props);


    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount(){
    this.props.getPostsFromAPI();
  }

  edit() {
    console.log("edit")
  }

  delete() {
    this.props.history.push("/");
    console.log("delete")
  }

  render() {
    console.log("this.props", this.props);
    let post = this.props.posts.filter(post=>(
      post.id.toString() === this.props.match.params.id
    ));
    
    debugger;
   console.log(post);
    return (
      <div>
        <div className="post">
          <h2>{post.title}</h2>
          <h5>{post.description}</h5>
          <p>{post.body}</p>
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