import React, { useState } from 'react';
import { initialTodos } from './initialTodos';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

const App: React.FC = () => {
	const [todos, setTodos] = useState<Array<Todo>>(initialTodos);
	const [todoCount, setTodoCount] = useState<Number>(0);

	const toggleComplete: ToggleComplete = (selectedTodo) => {
		const updatedTodos = todos.map((todo) => {
			if (todo === selectedTodo) {
				return { ...todo, complete: !todo.complete };
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	const addTodo: AddTodo = (newTodo) => {
		newTodo.trim() !== '' &&
			setTodos([...todos, { text: newTodo, complete: false }]);
	};

	return (
		<React.Fragment>
			{/* <h2>To Do:</h2> */}
			<TodoList todos={todos} toggleComplete={toggleComplete} />
			<AddTodoForm addTodo={addTodo} />
		</React.Fragment>
	);
};

export default App;
