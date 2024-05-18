// what is context api 
// let us assume ki ek dashboard hai or usme ek right or ek left hai or left ke andar do or compartment hai usme phle wale ke andar hame app ka title ya data bhej na hai..to traditional method to har level se guzarna padta matlab phle dashboard phir left compartment phir uske andar wale ko via props ham bhej te hai 
// but in context api below
// it's a way to pass data through the component tree without having to pass props down manually at every level of the tree.

import { useState } from 'react'
import ContextProvider from './context/ContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ContextProvider>
      <Login/>
      <Profile/>
    </ContextProvider>
  )
}

export default App
