import { connect } from "react-redux";
import {
  addPostToAPI,
  removePost,
  editPost,
  addComment,
  removeComment
} from "../actions";
import PostForm from "../Components/PostForm";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

const connectComponent = connect(
  mapStateToProps,
  { addPostToAPI, removePost, editPost, addComment, removeComment }
);

export default connectComponent(PostForm);
