import TodoItem from "./TodoItem";
import type { Todo } from "../types/Todo";

const todos: Todo[] = [
    {
        id: 1,
        text: "Wash dishes",
        completed: false,
    },
    {
        id: 2,
        text: "Get up in the morning",
        completed: false,
    },
    {
        id: 3,
        text: "Practice React",
        completed: true,
    },
];

// Derived values don't need State
const itemsLeft = todos.filter(
  todo => !todo.completed
).length;

const itemsCompleted = todos.filter(
  todo => todo.completed
).length;

function TodoList() {
    return <section>
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
        <footer><div><span>{itemsLeft}</span> items left</div> <button>Clear Completed ({itemsCompleted})</button></footer>
    </section>
}

export default TodoList;