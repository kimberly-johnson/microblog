import { connect } from "react-redux";
import {
  getPostsFromAPI,
  addPost,
  removePostsFromAPI,
  editPostInAPI,
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
  { getPostsFromAPI, addPost, removePostsFromAPI, editPostInAPI, addComment, removeComment }
);

export default connectComponent(PostDetail);
