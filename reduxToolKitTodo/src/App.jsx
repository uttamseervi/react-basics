import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-center bg-black'>
      <h1 className='text-center bg-slate-700 p-4 text-3xl'>Learn About redux tool kit</h1>
    </div>
  )
}

export default App
