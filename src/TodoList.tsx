import React from 'react';
// import { Todo, ToggleComplete } from './types';
import { TodoListItem } from './TodoListItem';

interface TodoListProps {
	todos: Array<Todo>;
	toggleComplete: ToggleComplete;
}

export const TodoList: React.FC<TodoListProps> = ({
	todos,
	toggleComplete,
}) => {
	return (
		<ul>
			{todos.map((todo, i) => (
				<TodoListItem
					key={'todoItem' + i}
					todo={todo}
					toggleComplete={toggleComplete}
				/>
			))}
		</ul>
	);
};
