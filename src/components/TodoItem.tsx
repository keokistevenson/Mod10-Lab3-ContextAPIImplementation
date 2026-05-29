import type { Todo } from "../types/Todo";

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
    return <li>
        <input type="checkbox" checked={todo.completed} readOnly />
         <span>{todo.text}</span>
        <button>Edit</button>
        <button>Delete</button>
    </li>
}

export default TodoItem;