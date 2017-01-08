let tid = 0;
export const addTask = (title, time) => {
	return {
		type: 'ADD_TASK',
		id: tid++,
		title,
		time
	}
}

export const editTask = (id, title, time) => {
	return {
		type: 'EDIT_TASK',
		id,
		title,
		time
	}
}

export const removeTask = (id) => {
	return {
		type: 'REMOVE_TASK',
		id
	}
}

export const setCurrentTask = (id) => {
	return {
		type: 'SET_CURRENT_TASK',
		id
	}
}

export const nextTask = (id) => {
	return {
		type: 'NEXT_TASK',
		id
	}
}
