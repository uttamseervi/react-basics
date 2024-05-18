import React from 'react'
import { useState } from 'react'
import UserContext from './UserContext'

const ContextProvider = ({ children }) => {
    // here we are passing the value or the data to the element
    const [user, setUser] = useState(null)
    return (

        // yaha pe children ka matlab kuch bhi ho chahe <app/> ho <dashborad/> ho anything usko pass karke wrap kardo
        // UserContext.Provider this also takes the value as props and provide it to all of its children
        <UserContext.Provider value={{user,setUser}}> 
            {children}
        </UserContext.Provider>
    )
}
// one method is this to write the userContextProvider and another method is we can directly use the
//  Usercontext.Provider
{/* <UserContext.Provider value={{user,setUser}}> 
{children}
</UserContext.Provider> */}
// this step we can directly write in the app.jsx or in main.jsx directly or we can export it through a file both are normal

export default ContextProvider
