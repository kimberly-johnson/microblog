import { connect } from "react-redux";
import {
  getPostsFromAPI,
  addPost,
  removePostsFromAPI,
  editPostInAPI,
  getCommentsFromAPI,
  addCommentToAPI,
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
  { getPostsFromAPI, addPost, removePostsFromAPI, editPostInAPI, getCommentsFromAPI, addCommentToAPI, removeComment }
);

export default connectComponent(PostDetail);
