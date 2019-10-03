import { GET_POSTS, ADD_POST, REMOVE_POST, EDIT_POST, ADD_COMMENT, REMOVE_COMMENT } from "./actionTypes";

const INITIAL_STATE = {
  posts: [], 
  comments: []
}

function rootReducer(state = INITIAL_STATE, action){
  switch(action.type){
    case GET_POSTS:
      return {...state,
        posts: action.payload}

    case ADD_POST:
      return {...state,
        posts: [...state.posts,
           action.payload
        ]};

    case REMOVE_POST:
      return {...state,
        posts: state.posts.filter(post=> post.id !== action.payload.id)};


    case EDIT_POST:
      return state;

    case ADD_COMMENT: 
      return state;

    case REMOVE_COMMENT:
      return state;
    
    default:
      return state;
  }
}

export default rootReducer;