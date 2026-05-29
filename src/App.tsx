import FilterButtons from './components/FilterButtons';
import AppHeader from "./components/AppHeader";
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import './App.css'

function App() {

  return (
    <div>
      <AppHeader />
      <TodoInput />
      <FilterButtons />
      <TodoList />
    </div>
  )
}

export default App
