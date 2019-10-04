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

const INITIAL_STATE = {
  posts: [],
  comments: [],
  currentPost: {}
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload };
    
    case GET_POST:
      return {...state, currentPost: action.payload}

    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };

    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };

    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.id) {
            return action.payload;
          } else {
            return post;
          }
        })
      };

    case GET_COMMENTS:
      return { ...state, comments: action.payload };

    case ADD_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };

    case REMOVE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          comment => comment.id !== action.payload
        )
      };

    default:
      return state;
  }
}

export default rootReducer;
