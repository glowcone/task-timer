import { connect } from 'react-redux';
import { setCurrentTask, editTask } from '../actions/actions'
import TaskList from '../components/TaskList'

const mapStateToProps = (state) => {
	let activeTasks = state.tasks.slice(state.currentTaskIndex + 1);
	return {
		tasks: activeTasks
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTaskClick: (id) => {
			dispatch(setCurrentTask(id));
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
