import React from "react";
// is a method to create the context we store it in a variable  called UserContext and export it.
const UserContext = React.createContext()
export default UserContext;
// context hai kya context hame ek variable hi to provide kar rha hai data transfer keliye har ek context ek provider hi hota hai
// below is the provider look a like
{/* <userContext.Provider>
    <App/>
    <login/> 
</userContext.Provider> */}
// this is the provide the components which are inside this provider can access the above global user context
// this is done in the next jsx file