import TodoItem from "./TodoItem";
import type { Todo } from "../types/Todo";

interface TodoListProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoList({ todos, setTodos }: TodoListProps) {
    // Derived values don't need State
    // They are recalculated every time TodoList renders.
    const itemsLeft = todos.filter((todo) => !todo.completed);
    const itemsCompleted = todos.filter((todo) => todo.completed);

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

        // Code below is better than setTodos(itemsLeft); because the code below gets the latest state from React.
        setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
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
                        onEditTodo={editTodo}
                    />
                ))}
            </ul>

            <footer>
                <div>
                    <span>{itemsLeft.length}</span> items left
                </div>

                <button onClick={clearCompleted}>Clear Completed ({itemsCompleted.length})</button>
            </footer>
        </section>
    );
}

export default TodoList;