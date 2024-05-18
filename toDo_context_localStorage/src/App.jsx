import { useState, useEffect } from 'react'
// import './contexts/index'

import { TodoProvider } from './contexts/index'
import { TodoForm, TodoItem } from './components'


function App() {
  // the functionalities for the function which are declared in the context file are defined here rather than defining here 
  // it is compulsory to name the methods same as they are declared
  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {
    // agar ham directly setTodos ke andar  todo ko pass kar diya to previous saari values dlt hojayegi
    // so hame ek method pata hai ham call back use karsakte hai to retain the old values 
    // like it is done here
    //...prevTodos : matlab purani jp bhi values thi unhe lakar spread kardo or naya todo add kardo
    // ... three dots are used as spread operator in java-script for more reference replit ke js pe hai
    // setTodos(prevTodos => [...prevTodos, todo])  
    setTodos(prevTodos => [{ id: Date.now(), ...todo }, ...prevTodos])
  }


  // id we write directly infront of the arrow function we can directly return it without writing the return 
  const updateTodo = (id, todo) => {
    (prev) => prev.map((prevTodo) => { prevTodo.id === id ? todo : prevTodo })
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }

  }, [])
  useEffect(() => {
    // we use setItem to set the item into the local storage 
    // and one more thing to set the  item we need to give both key and value but to get the item we just need the key
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{
      todos, addTodo, deleteTodo, toggleComplete, updateTodo
    }}>    <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>

            ))}
          </div>
        </div>
      </div>
    </TodoProvider>

  )
}

export default App
