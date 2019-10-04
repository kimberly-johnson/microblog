import { connect } from "react-redux";
import {
  getPostsFromAPI,
  getPostFromAPI,
  removePostsFromAPI,
  editPostInAPI,
  getCommentsFromAPI,
  addCommentToAPI,
  removeCommentFromAPI
} from "../actions";
import PostDetail from "../Components/PostDetail";

function mapStateToProps(state) {
  return {
    //maybe no comments, check 
    comments: state.comments,
    currentPost: state.currentPost
  };
}

const connectComponent = connect(
  mapStateToProps,
  {
    getPostsFromAPI,
    getPostFromAPI,
    removePostsFromAPI,
    editPostInAPI,
    getCommentsFromAPI,
    addCommentToAPI,
    removeCommentFromAPI
  }
);

export default connectComponent(PostDetail);
