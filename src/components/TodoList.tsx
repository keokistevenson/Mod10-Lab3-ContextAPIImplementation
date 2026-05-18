import TodoItem from "./TodoItem";

function TodoList() {
    return <section>
        <ul>
            <TodoItem />
        </ul>
        <footer><div><span></span> items left</div> <button></button></footer>
    </section>
}

export default TodoList;