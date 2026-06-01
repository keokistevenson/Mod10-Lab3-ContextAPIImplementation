import { useState } from "react";
import { useTodos } from "../context/TodoContext";

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

function TodoInput() {
  const [todoText, setTodoText] = useState("");
  const { addTodo } = useTodos();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedText = todoText.trim();

    if (!trimmedText) return;

    addTodo(trimmedText);
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