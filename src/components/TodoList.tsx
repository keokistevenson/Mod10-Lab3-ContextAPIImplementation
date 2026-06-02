import TodoItem from "./TodoItem";
import { useTodos } from "../context/TodoContext";
import { useFilter } from "../context/FilterContext";


function TodoList() {
    const { todos, clearCompleted } = useTodos();
    const { filter } = useFilter();

    const visibleTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    });

    // Derived values don't need State
    // They are recalculated every time TodoList renders.
    const itemsLeft = todos.filter((todo) => !todo.completed);
    const itemsCompleted = todos.filter((todo) => todo.completed);

    return (
        <section>
            <ul>
                {visibleTodos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
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