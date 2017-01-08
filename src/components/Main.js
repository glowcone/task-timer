import React from 'react';

import Timer from './Timer';
import TaskListView from '../containers/TaskListView';
import AddTask from './AddTask';

const Main = () => (
	<div>
		<Timer time={10}/>
		<TaskListView />
		<AddTask />
	</div>
)

export default Main;
