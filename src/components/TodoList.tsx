import TodoItem from "./TodoItem";
import { useTodos } from "../context/TodoContext";


function TodoList() {
const { todos, clearCompleted } = useTodos();

    // Derived values don't need State
    // They are recalculated every time TodoList renders.
    const itemsLeft = todos.filter((todo) => !todo.completed);
    const itemsCompleted = todos.filter((todo) => todo.completed);

    return (
        <section>
            <ul>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        // onDeleteTodo={deleteTodo}
                        // onToggleTodo={toggleTodo}
                        // onEditTodo={editTodo}
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