import { addTodo } from "../toolkitReducer";

export function addAsyncTodo(todo) {
	return async (dispatch) => {
		setTimeout(() => {
			dispatch(addTodo(todo));
		}, 2000);
	};
}
