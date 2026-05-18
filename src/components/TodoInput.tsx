import { useState } from "react";

function TodoInput() {
    const [state, setState] = useState<string>("");

    function addTodo = () => {
        setState(todoInput.value);
    }

    return <section>
        <input className="todoInput" type="text" /> <button onclick = addTodo>Add Todo</button>
    </section>
}

export default TodoInput;