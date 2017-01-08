const timer = (state = 0, action) => {
	switch(action.type) {
		case 'NEXT_TASK':
			return state + 1;
		case 'SET_CURRENT_TASK':
			return action.id;
		default: return state;
	}
}

export default timer;
