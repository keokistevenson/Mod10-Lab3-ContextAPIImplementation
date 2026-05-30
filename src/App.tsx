import { useState } from "react";
import AppHeader from "./components/AppHeader";
import TodoInput from "./components/TodoInput";
import FilterButtons from "./components/FilterButtons";
import TodoList from "./components/TodoList";
import type { Todo } from "./types/Todo";

const initialTodos: Todo[] = [
  { id: 1, text: "Wash dishes", completed: false },
  { id: 2, text: "Get up in the morning", completed: false },
  { id: 3, text: "Practice React", completed: true },
];

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  function addTodo(text: string) {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  return (
    <div>
      <AppHeader />
      <TodoInput onAddTodo={addTodo} />
      <FilterButtons />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;