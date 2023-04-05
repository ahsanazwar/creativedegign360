import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';
import { UserReducer } from './userReducers';

const rootReducers = () =>
	combineReducers({
		user: UserReducer,
	});

export default rootReducers;
