import AppHeader from "./components/AppHeader";
import TodoInput from "./components/TodoInput";
import FilterButtons from "./components/FilterButtons";
import TodoList from "./components/TodoList";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <AppHeader />
      <TodoInput />
      <FilterButtons />
      <TodoList />
    </div>
  );
}

export default App;