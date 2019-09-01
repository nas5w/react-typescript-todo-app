import React from "react";
import "./TodoListItem.css";
import { Todo, ToggleComplete } from "./types";

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
      <input
        type="checkbox"
        onChange={() => toggleComplete(todo)}
        checked={todo.complete}
      />
      <span className={todo.complete ? "complete" : undefined}>
        {todo.text}
      </span>
    </li>
  );
};
