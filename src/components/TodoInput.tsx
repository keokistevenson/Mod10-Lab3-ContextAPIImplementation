import { useState } from "react";

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

function TodoInput({ onAddTodo }: TodoInputProps) {
  const [todoText, setTodoText] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedText = todoText.trim();

    if (!trimmedText) return;

    onAddTodo(trimmedText);
    setTodoText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={todoText}
        onChange={(event) => setTodoText(event.target.value)}
      />

      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoInput;