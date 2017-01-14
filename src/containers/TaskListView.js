import { connect } from 'react-redux';
import { setCurrentTask, editTask, removeTask } from '../actions/actions'
import TaskList from '../components/TaskList'

const mapStateToProps = (state) => {
	let activeTasks = state.tasks.slice(state.currentTaskIndex);
	let completedTasks = state.tasks.slice(0, state.currentTaskIndex-1);
	return {
		activeTasks,
		completedTasks
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTaskClick: (id) => {
			dispatch(setCurrentTask(id));
		},
		onTaskRemove: (id) => {
			dispatch(removeTask(id));
		},
		onTaskEdit: (id, title, time) => {
			dispatch(editTask(id, title, time));
		}
	}
}

const TaskListView = connect(
	mapStateToProps,
	mapDispatchToProps
)(TaskList);

export default TaskListView;
