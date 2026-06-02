import { useState } from "react";
import AppHeader from "./components/AppHeader";
import TodoInput from "./components/TodoInput";
import FilterButtons from "./components/FilterButtons";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <AppHeader />
      <TodoInput />
      <FilterButtons />
      <TodoList />
    </div>
  );
}

export default App;