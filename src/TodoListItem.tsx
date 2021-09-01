import React from "react";
import "./TodoListItem.css";
import { Todo, ToggleComplete } from './types'

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete
}) => {
  return (
    <li>
      <label className={todo.complete ? "complete" : undefined} data-testid="todo-item">
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
          data-testid="todo-item-complete-check"
        />
        {todo.text}
      </label>
    </li>
  );
};
