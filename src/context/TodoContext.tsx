import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Todo } from "../types/Todo";

interface TodoContextValue {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
  clearCompleted: () => void;
}

const TodoContext = createContext<TodoContextValue | undefined>(undefined);

const initialTodos: Todo[] = [
  { id: 1, text: "Wash dishes", completed: false },
  { id: 2, text: "Get up in the morning", completed: false },
  { id: 3, text: "Practice React", completed: true },
];

interface TodoProviderProps {
  children: ReactNode;
}

export function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  function addTodo(text: string) {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  function deleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id: number) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  function editTodo(id: number, newText: string) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  }

  function clearCompleted() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        toggleTodo,
        editTodo,
        clearCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodos must be used inside a TodoProvider");
  }

  return context;
}