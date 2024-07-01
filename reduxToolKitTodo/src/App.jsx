import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black'>
      <h1 className='text-center bg-slate-700 p-4 text-3xl'>Learn About redux tool kit</h1>
        <AddTodo/>
        <Todos/>
    </div>
  )
}

export default App
