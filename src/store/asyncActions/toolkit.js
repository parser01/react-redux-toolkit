import { addTodo } from "../toolkitReducer";

export function addAsyncTodo(todo) {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(addTodo(todo));
		}, 3000);
	};
}
