import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PrintName from "./new.jsx" 

function printSomething(){
  return(
    <div>
      <h1>This is a dummy text</h1>
    </div>
  )
}
//the below code is not acceptable bcoz i can give any thing in the place of a i can give my name also but js dont understand what is it
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

let anotherElement = (
  <a href='https://google.com' target="_blank">Visit google</a>
)
// let CorrectSyntax = React.createElement(
//   "a",
//   {href:"https://google.com",target:"_blank"},
//   "Click me to visit google"
// )
let anotherUser = "Chai aur code"
let CorrectSyntax = React.createElement(
  "a",
  {href:"https://google.com",target:"_blank"},
  "Click me to visit google",
  " and ",

  anotherUser //here another user is injected directly into the code 
 )
ReactDOM.createRoot(document.getElementById('root')).render(

/*     
    <> 
    <App/>
    <PrintName/>
    </> */
    // printSomething()
    /* <reactElement />  this will not work because the syntax is not `it is written above*/
    // this will work because the syntax is right but not completely
    // anotherElement   
  
    CorrectSyntax
  
  


 
)
