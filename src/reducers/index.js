import { combineReducers } from 'redux';
import reducer_posts  from '../reducers/reducer_posts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts : reducer_posts,
  form: formReducer
});

export default rootReducer;
