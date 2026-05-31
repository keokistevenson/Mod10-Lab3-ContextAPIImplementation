import { useState } from "react";
import type { Todo } from "../types/Todo";

interface TodoItemProps {
    todo: Todo;
    onDeleteTodo: (id: number) => void;
    onToggleTodo: (id: number) => void;
    onEditTodo: (id: number, newtext: string) => void;
}

function TodoItem({ todo, onDeleteTodo, onToggleTodo, onEditTodo }: TodoItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    function handleSave() {
        const trimmedText = editText.trim();

        if (!trimmedText) return;

        onEditTodo(todo.id, trimmedText);
        setIsEditing(false);
    }

    return <li>
        {!isEditing && (<input type="checkbox" checked={todo.completed} onChange={() => onToggleTodo(todo.id)} />)}
        {isEditing && <input type="text" value={editText} onChange={(event) => setEditText(event.target.value)} onBlur={handleSave} />}
        {!isEditing && (
            <>
                <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</span>
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
            </>
        )}
    </li>
}

export default TodoItem;