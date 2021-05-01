type Todo = {
	text: string;
	complete: boolean;
};

type ToggleComplete = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;
