import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const[variable,method] = useState(15) why we use UseState coz it update UI and update all the occurrences of counter in this code
  let [counter, setCount] = useState(15);
  // let counter = 15
  const addValue = () => {
    if (counter >= 20) {
      setCount(0);
    } else {
      // setCount(counter + 1);
      // // setCount(counter + 1);what will happen if i give multiple calls of setCounter will it increase the count by number of times of call  no i don't because ye sab ek bunch of packages banake execute kardeta hai .. so ek hi baar run hoga
      // setCount(counter + 1);
      // setCount(counter + 1);
      // setCount(counter + 1);
      // AGAR MERKO 4 BAAR CALL KO EXECUTE KARANA HAI TO EK SPL FEATURE HAI SETCOUNT KI WO EK CALL BACK FUCTION USE KARTA HAI 
      setCount(prevCounter =>  prevCounter + 1);
      setCount(prevCounter  =>  prevCounter + 1);
      setCount(prevCounter =>  prevCounter + 1);
      setCount(prevCounter =>  prevCounter + 1);
      //prevCounter merko dega counter ka last updated state
      // prevCounter is just a variable name i can give anything  to it 
      // INTERVIEW KE LIYE IMPORTANT HAI
    }
  };

  function decValue() {
    // counter = counter-1;
    if (counter <= 0) {
      setCount(0);
    } else {
      setCount(counter - 1);
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={decValue}>decrease Value {counter}</button>
      <p>Footer:{counter}</p>
    </>
  );
}

export default App;
