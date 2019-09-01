import React, { useState } from "react";
import { initialTodos } from "./initialTodos";
import { Todo, ToggleComplete, AddTodo } from "./types";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);

  const toggleComplete: ToggleComplete = selectedTodo => {
    setTodos(todos => {
      return todos.map(todo => {
        if (todo === selectedTodo) {
          todo.complete = !todo.complete;
        }
        return todo;
      });
    });
  };

  const addTodo: AddTodo = newTodo => {
    setTodos(todos => [...todos, { text: newTodo, complete: false }]);
  };

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleComplete={toggleComplete} />
      <AddTodoForm addTodo={addTodo} />
    </React.Fragment>
  );
};

export default App;
