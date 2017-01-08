import React from 'react';
import { connect } from 'react-redux'
import { addTask } from '../actions/actions'

const AddTask = ({ dispatch }) => {
	return (
		<div>
			<button onClick={(e) => {
				e.preventDefault();
				dispatch(addTask('', 0));
			}}>
				Add
			</button>
		</div>
	)
}

export default connect()(AddTask);
