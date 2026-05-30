import TodoItem from "./TodoItem";
import type { Todo } from "../types/Todo";

interface TodoListProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoList({ todos, setTodos }: TodoListProps) {
    // Derived values don't need State
    // They are recalculated every time TodoList renders.
    const itemsLeft = todos.filter((todo) => !todo.completed).length;
    const itemsCompleted = todos.filter((todo) => todo.completed).length;

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

    return (
        <section>
            <ul>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDeleteTodo={deleteTodo}
                        onToggleTodo={toggleTodo}
                    />
                ))}
            </ul>

            <footer>
                <div>
                    <span>{itemsLeft}</span> items left
                </div>

                <button>Clear Completed ({itemsCompleted})</button>
            </footer>
        </section>
    );
}

export default TodoList;