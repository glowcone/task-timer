import { combineReducers } from 'redux';
import tasks from './reducers/tasks';
import timer from './reducers/timer';

const reducer = combineReducers({
	tasks,
	timer
});

export default reducer;
