import {combineReducers} from 'redux';

import articlesReducer from './articles.reducer';
import commentsReducer from './comments.reducer';
import topicsReducer from './topics.reducer';
import usersReducer from './users.reducer';

export default combineReducers({
	articles: articlesReducer,
	comments: commentsReducer,
	topics: topicsReducer,
	users: usersReducer
});
