import { useState } from "react";
import type { Todo } from "../types/Todo";
import { useTodos } from "../context/TodoContext";

interface TodoItemProps {
    todo: Todo;
    // onDeleteTodo: (id: number) => void;
    // onToggleTodo: (id: number) => void;
    // onEditTodo: (id: number, newText: string) => void;
}

function TodoItem({ todo }: TodoItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const { deleteTodo, toggleTodo, editTodo } = useTodos();

    function handleSave() {
        const trimmedText = editText.trim();

        if (!trimmedText) return;

        editTodo(todo.id, trimmedText);
        setIsEditing(false);
    }

    return <li>
        {!isEditing && (<input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />)}
        {isEditing && <input type="text" value={editText} onChange={(event) => setEditText(event.target.value)} onBlur={handleSave} />}
        {!isEditing && (
            <>
                <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</span>
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </>
        )}
    </li>
}

export default TodoItem;