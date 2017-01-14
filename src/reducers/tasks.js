const task = (state = {}, action) => {
	switch(action.type) {
		case 'ADD_TASK':
			return {
				id: action.id,
				title: action.title,
				time: action.time,
			}

		case 'EDIT_TASK':
			if(state.id !== action.id)
				return state;
			return Object.assign({}, state, {
				title: action.title,
				time: action.time
			})

		default:
			return state;
	}
}

const initialState = [];

const tasks = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_TASK':
			return [
				...state,
				task(undefined, action)
			];
		case 'REMOVE_TASK':
			return state.filter(t => t.id !== action.id);
		case 'EDIT_TASK':
			return state.map(t => task(t, action));
		default:
			return state;
	}
}

export default tasks;
