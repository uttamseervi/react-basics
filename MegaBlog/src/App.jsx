import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
/*
important notes:
1. to declare the environment variables in react@vite we use the the prefix VITE_VARIABLE_NAME
1. to declare the environment variables in react@react-app we use the the prefix REACT_APP_VARIABLE_NAME
some thing applies to access the env variables also 
in vite@latest
console.log(import.meta.env.VITE_APPWRITE_URL)
in react-app
console.log(process.env.REACT_APP_APPWRITE_URL)
*/
function App() {


  console.log("NOTHING")
  return (
    <>
      <h1 className='text-3xl p-4 font-bold underline bg-gray-500'>A blog app with appwrite</h1>

    </>
  )
}

export default App
