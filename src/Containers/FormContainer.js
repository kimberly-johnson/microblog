import { connect } from "react-redux";
import {
  addPostToAPI,
  editPostInAPI
} from "../actions";
import PostForm from "../Components/PostForm";

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

const connectComponent = connect(
  mapStateToProps,
  { addPostToAPI, editPostInAPI }
);

export default connectComponent(PostForm);
