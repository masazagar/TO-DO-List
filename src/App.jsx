import { useState } from 'react'
import "./index.css"
import './App.css'

function App() {
 
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  function addNewItem() {
    if (input === "") return
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {id:Math.random(), title: input}
      ]
    })

    setInput("")
  }

  function deleteItem(id) {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }
  return (
    <>
      <header className='header'>
        <input 
        type="text" 
        placeholder="Type new item"
        value={input}
        onChange={(e)=> setInput(e.target.value)}/>
        <button onClick={() => addNewItem()}>Add</button>
      </header>

     

      <div className='to-do-list'>
        <h1>TO DO:</h1>
        <ul>
        {todos.map((todo) => {
          return (
            <>
          <div className='list-container'>
            <li>{todo.title}</li>
          <button onClick={() => deleteItem(todo.id)}>❌</button>
          </div></>)})}
        </ul>

      </div>
    </>
  )
}

export default App
