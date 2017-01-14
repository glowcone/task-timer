import React from 'react';
import Task from './Task';

const TaskList = ({ activeTasks, completedTasks, onTaskClick, onTaskEdit, onTaskRemove }) => (
	<div>
		<p>Completed Tasks:</p>
		<ul>
			{completedTasks.map(t => (
					<Task
						key={t.id}
						{...t}
						onClick={() => onTaskClick(t.id)}
						onRemove={() => onTaskRemove(t.id)}
					/>
			))}
		</ul>

		<p>Active Tasks:</p>
		<ul>
			{activeTasks.map(t => (
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
