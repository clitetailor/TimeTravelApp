


export function todos(state = { timeline: [[]], current: [], currentId: 0, count: 1 }, action) {
	switch (action.type) {

		case "INIT_STATE": {
			return Object.assign({}, action.state);
		}

		case "ADD_TODO": {
			// Remove all future states
			state.timeline = state.timeline.slice(0, state.currentId + 1);

			// Add todo
			state.current = [...state.current, {
				text: action.text,
				completed: false
			}];

			// Add current state to timeline
			state.timeline = [...state.timeline, [...state.current]];

			// Increase counter
			++state.currentId;
			state.count = state.timeline.length;

			return Object.assign({}, state);
		}

		case "COMPLETE_TODO": {
			// Already completed, nothing more to do
			if (state.current[action.todoId].completed === true) {
				return state;
			}

			// Remove all future states
			state.timeline = state.timeline.slice(0, state.currentId + 1);

			// State change
			state.current = [...state.current];
			state.current[action.todoId] = Object.assign({}, state.current[action.todoId], { completed: true });

			// Add current state to timeline
			state.timeline = [...state.timeline, [...state.current]];

			// Increase counter
			++state.currentId;
			state.count = state.timeline.length;

			return Object.assign({}, state);
		}

		case "GOTO_PREVIOUS": {
			// Already in the first state, nothing more to do
			if (state.currentId === 0) {
				return state;
			}

			// Decrease counter
			--state.currentId;

			// Move from current state to previous state
			state.current = [...state.timeline[state.currentId]];

			return Object.assign({}, state);
		}

		case "GOTO_NEXT": {
			// Already in the last state, nothing more to do
			if (state.currentId + 1 === state.count) {
				return state;
			}

			// Increase counter
			++state.currentId;

			// Move from current state to next state
			state.current = [...state.timeline[state.currentId]];

			return Object.assign({}, state);
		}

		case "GOTO_STEP": {
			if (action.id < 0 || action.id >= state.count) {
				return state;
			}

			// Change counter
			state.currentId = action.id;

			// Go to state
			state.current = [...state.timeline[state.currentId]];

			return Object.assign({}, state);
		}
	}
}

export function initState(state) {
	return {
		type: "INIT_STATE",
		state: state
	}
}

export function addTodo(text) {
	return {
		type: "ADD_TODO",
		text: text
	};
}

export function completeTodo(todoId) {
	return {
		type: "COMPLETE_TODO",
		todoId: todoId
	}
}

export function previous() {
	return {
		type: "GOTO_PREVIOUS"
	}
}

export function next() {
	return {
		type: "GOTO_NEXT"
	}
}

export function goto(step) {
	return {
		type: "GOTO_STEP",
		id: step
	}
}

export let rootReducer = todos;