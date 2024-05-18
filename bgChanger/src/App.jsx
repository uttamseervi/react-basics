import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}
      >
        <div className='justify-center flex flex-wrap fixed  bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl w-auto'>
            {/* <button onClick={setColor("red")} className='outline-none px-4 rounded-xl w-20 h-7' style={{backgroundColor:"red"}}>red</button> */}
            {/* if i give directly it will not work bcoz onClick ko ek function chahiye or mera setColor function color ko return kar rha hai but onClick ko return value nhi vo function chahiye so ek call back function se hamara kaam ho rha hoi */}
            <button onClick={()=> setColor("red")} className='outline-none px-4 rounded-xl w-20 h-7' style={{backgroundColor:"red"}}>red</button>
            <button onClick={()=> setColor("green")} className='outline-none px-4 rounded-xl w-20 h-7' style={{backgroundColor:"green"}}>green</button>
            <button onClick={()=> setColor("blue")} className='outline-none px-4 rounded-xl w-20 h-7' style={{backgroundColor:"blue"}}>blue</button>
            <button onClick={()=> setColor("grey")} className='outline-none px-4 rounded-xl w-20 h-7' style={{backgroundColor:"grey"}}>grey</button>
            <button onClick={()=> setColor("purple")} className='outline-none px-4 rounded-xl w-20 h-7' style={{backgroundColor:"purple"}}>purple</button>
            <button onClick={()=> setColor("yellow")} className='outline-none px-4 rounded-xl w-20 h-7' style={{backgroundColor:"yellow"}}>yellow</button>
            <button onClick={()=> setColor("orange")} className='outline-none px-4 rounded-xl w-20 h-7' style={{backgroundColor:"orange"}}>orange</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
