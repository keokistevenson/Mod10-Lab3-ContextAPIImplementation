import FilterButtons from './components/FilterButtons';
import ThemeToggleButton from './components/ThemeToggleButton';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ThemeToggleButton />
      <TodoInput />
      <FilterButtons />
      <TodoList />
      
    </div>
  )
}

export default App
