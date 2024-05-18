import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";
function App() {
  

  return (
    <>
      <h1 className=" mb-4 bg-green-400 text-black p-4 rounded-xl h-100">
        Tail Wind Test
      </h1>
      <Card userName="chai aur code" btnText="Dont Click me"/>
      <Card userName="chai aur code" /> 
      {/* this will get a default value for the btn text */}
    </>
  );
}

export default App;
