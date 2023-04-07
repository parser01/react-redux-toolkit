import { useDispatch, useSelector } from "react-redux";
import {
	increment,
	decrement,
	addTodo,
	removeLastTodo,
} from "../../store/toolkitReducer";
import styles from "./App.module.scss";
import { addAsyncTodo } from "../../store/asyncActions/toolkit";

export default function App() {
	const count = useSelector((state) => state.toolkit.count);
	const todos = useSelector((state) => state.toolkit.todos);
	const dispatch = useDispatch();

	return (
		<div className={styles.app}>
			<div className={styles.count}>Count {count}</div>
			<div className={styles.buttons}>
				<button onClick={() => dispatch(increment())}>Increment</button>
				<button onClick={() => dispatch(decrement())}>Decrement</button>
				<button onClick={() => dispatch(addTodo(prompt()))}>
					Add todo
				</button>
				<button onClick={() => dispatch(removeLastTodo())}>
					Remove last todo
				</button>
				<button onClick={() => dispatch(addAsyncTodo(prompt()))}>
					Add async todo
				</button>
			</div>
			<div className={styles.todos}>
				{todos.map((todo, index) => (
					<div key={index}>
						{index + 1}. {todo}
					</div>
				))}
			</div>
		</div>
	);
}
