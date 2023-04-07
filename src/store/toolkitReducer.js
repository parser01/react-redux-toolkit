import { createSlice } from "@reduxjs/toolkit";

const toolkit = createSlice({
	name: "toolkit",
	initialState: {
		count: 0,
		todos: [],
	},
	reducers: {
		increment(state) {
			state.count += 1;
		},
		decrement(state) {
			state.count -= 1;
		},
		addTodo(state, action) {
			state.todos.push(action.payload);
		},
		removeLastTodo(state) {
			state.todos.pop();
		},
	},
});

export const { increment, decrement, addTodo, removeLastTodo } =
	toolkit.actions;
export default toolkit.reducer;
