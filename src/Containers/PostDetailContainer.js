import { connect } from "react-redux";
import {
  getPostFromAPI,
  removePostsFromAPI,
  editPostInAPI,
  getCommentsFromAPI,
  addCommentToAPI,
  removeCommentFromAPI,
  sendVoteToAPI

} from "../actions";
import PostDetail from "../Components/PostDetail";

function mapStateToProps(state) {
  return {
    comments: state.comments,
    currentPost: state.currentPost,
    error: state.error
  };
}

const connectComponent = connect(
  mapStateToProps,
  {
    getPostFromAPI,
    removePostsFromAPI,
    editPostInAPI,
    getCommentsFromAPI,
    addCommentToAPI,
    removeCommentFromAPI,
    sendVoteToAPI
  }
);

export default connectComponent(PostDetail);
