import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  REMOVE_POST,
  EDIT_POST,
  GET_COMMENTS,
  ADD_COMMENT,
  REMOVE_COMMENT
} from "./actionTypes";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

export function getPosts(posts) {
  return {
    type: GET_POSTS,
    payload: posts
  };
}

export function getPost(post) {
  return {
    type: GET_POST,
    payload: post
  };
}

export function addPost(post) {
  return {
    type: ADD_POST,
    payload: post
  };
}

export function removePost(id) {
  return {
    type: REMOVE_POST,
    payload: id
  };
}
export function editPost(id) {
  return {
    type: EDIT_POST,
    payload: id
  };
}

export function getComments(postID) {
  return {
    type: GET_COMMENTS,
    payload: postID
  };
}

export function addComment(id) {
  return {
    type: ADD_COMMENT,
    payload: id
  };
}

export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    payload: id
  };
}

//currently not doing anything with errors
function handleError(error) {
  return {
    type: "ERROR",
    error
  };
}

export function addPostToAPI(post) {
  return async function thunk(dispatch) {
    try {
      let response = await axios.post(`${API_URL}/posts`, post);
      dispatch(addPost(response.data));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}

//write more try catches, 
export function getPostsFromAPI() {
  return async function thunk(dispatch) {
    let response = await axios.get(`${API_URL}/posts`);
    dispatch(getPosts(response.data));
  };
}

export function getPostFromAPI(postID) {
  return async function thunk(dispatch) {
    let response = await axios.get(`${API_URL}/posts/${postID}`);
    dispatch(getPost(response.data));
  };
}

export function removePostsFromAPI(id) {
  return async function thunk(dispatch) {
    await axios.delete(`${API_URL}/posts/${id}`);
    dispatch(removePost(id));
  };
}

export function editPostInAPI(id, post) {
  return async function thunk(dispatch) {
    let response = await axios.put(`${API_URL}/posts/${id}`, post);
    dispatch(editPost(response.data));
  };
}

export function getCommentsFromAPI(postID) {
  return async function thunk(dispatch) {
    let response = await axios.get(`${API_URL}/posts/${postID}/comments`);
    dispatch(getComments(response.data));
  };
}

export function addCommentToAPI(postID, comment) {
  let commentToPost = { id: postID, text: comment.newComment };
  return async function thunk(dispatch) {
    let response = await axios.post(
      `${API_URL}/posts/${postID}/comments`,
      commentToPost
    );
    dispatch(addComment(response.data));
  };
}

export function removeCommentFromAPI(postID, commentID) {
  return async function thunk(dispatch) {
    await axios.delete(`${API_URL}/posts/${postID}/comments/${commentID}`);
    dispatch(removeComment(commentID));
  };
}