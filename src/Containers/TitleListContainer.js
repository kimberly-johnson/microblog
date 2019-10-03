import { connect } from "react-redux";
import {
  getPostsFromAPI,
  addPost,
  removePost,
  editPost,
  addComment,
  removeComment
} from "../actions";
import TitleList from "../Components/TitleList";



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

export default connectComponent(TitleList);
