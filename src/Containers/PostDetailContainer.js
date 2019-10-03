import { connect } from "react-redux";
import {
  getPostsFromAPI,
  addPost,
  removePost,
  editPost,
  addComment,
  removeComment
} from "../actions";
import PostDetail from "../Components/PostDetail";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

const connectComponent = connect(
  mapStateToProps,
  { getPostsFromAPI, addPost, removePost, editPost, addComment, removeComment }
);

export default connectComponent(PostDetail);
