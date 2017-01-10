import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onTaskClick, onTaskEdit, onTaskRemove }) => (
	<div>
		<p>Tasks:</p>
		<ul>
			{tasks.map(t => (
					<Task
						key={t.id}
						{...t}
						onClick={() => onTaskClick(t.id)}
						onRemove={() => onTaskRemove(t.id)}
						onSave={(title, time) => onTaskEdit(t.id, title, time)}
					/>
			))}
		</ul>
	</div>
)

export default TaskList;
