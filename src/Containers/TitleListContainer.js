import { connect } from "react-redux";
import {
  getPostsFromAPI,
} from "../actions";
import TitleList from "../Components/TitleList";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    error: state.error
  };
}

const connectComponent = connect(
  mapStateToProps,
  { getPostsFromAPI }
);

export default connectComponent(TitleList);
