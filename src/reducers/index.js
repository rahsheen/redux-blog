import { combineReducers } from 'redux';
<<<<<<< HEAD
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer
=======

const rootReducer = combineReducers({
  state: (state = {}) => state
>>>>>>> origin/master
});

export default rootReducer;
