import { connect } from "react-redux";
import {
  addPostToAPI,
  editPostInAPI
} from "../actions";
import PostForm from "../Components/PostForm";

function mapStateToProps(state) {
  return {
    posts: state,
    error: state.error
  };
}

const connectComponent = connect(
  mapStateToProps,
  { addPostToAPI, editPostInAPI }
);

export default connectComponent(PostForm);
