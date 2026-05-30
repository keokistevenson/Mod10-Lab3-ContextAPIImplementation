import type { Todo } from "../types/Todo";

interface TodoItemProps {
    todo: Todo;
    onDeleteTodo: (id: number) => void;
    onToggleTodo: (id: number) => void;
}

function TodoItem({ todo, onDeleteTodo, onToggleTodo }: TodoItemProps) {
    return <li>
        <input type="checkbox" checked={todo.completed} onChange={()=>onToggleTodo(todo.id)} />
        <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}
        </span>
        <button>Edit</button>
        <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
    </li>
}

export default TodoItem;