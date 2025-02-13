import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'


function App() {

  const [todos, setTodos] = useState([]);
 

  const createTodo=(newTodo)=>{
    setTodos([...todos,newTodo]);
  }
  const removeTodo=(id)=>{
    const yakala=todos.filter((todo)=>todo.id!==id)
    setTodos([...yakala]);
  }
  const updateTodo=(editedTodo)=>{
    const updatedTodos=todos.map((todo)=>
    todo.id!==editedTodo.id?
    todo
    :editedTodo);
    setTodos([...updatedTodos]);
  }
  return (
    <div className='App'>
      <div className='main'>
        <TodoCreate onCreateTodo={createTodo}/>
        <TodoList todos={todos}  onRemoveTodo={removeTodo} onEditedTodo={updateTodo}/>
      </div>
    </div>
  )
}

export default App
