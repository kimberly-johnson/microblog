import { connect } from "react-redux";
import {
  addPostToAPI,
  removePost,
  editPostInAPI,
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
  { addPostToAPI, removePost, editPostInAPI, addComment, removeComment }
);

export default connectComponent(PostForm);
