import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
	count: 0,
	todos: [],
};

export const increment = createAction("INCREMENT");
export const decrement = createAction("DECREMENT");
export const addTodo = createAction("ADD_TODO");
export const removeLastTodo = createAction("REMOVE_LAST_TODO");

export default createReducer(initialState, {
	[increment]: (state) => {
		state.count++;
	},

	[decrement]: (state) => {
		state.count--;
	},

	[addTodo]: (state, action) => {
		state.todos.push(action.payload);
	},

	[removeLastTodo]: (state) => {
		state.todos.pop();
	},
});
