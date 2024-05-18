import { useState, useCallback, useEffect, useRef } from "react";

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);
  const copyToClipBoard = useCallback(() => {
    // passwordRef.current?.select() this is to enchance the userinterfacae  by selecting the text in input field after clicking on
    // we use question mark bcoz  it will not throw error if the value is null or undefined. or if it is zero  
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,6) we use this to select the specified range
    passwordRef.current?.setSelectionRange(0, 16)

    window.navigator.clipboard.writeText(password)
  }, [password])
  const passwordGenerator =
    useCallback(() => {
      let pass = "";
      let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
      if (numberAllowed) str += "1234567890";
      if (character) str += "!@#$%^&*()_";
      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
        // charat konsi index pe aapko value chahiye it will take the char from that index
      }
      setPassword(pass);
    }, [length, numberAllowed, character, setPassword]);

  // useeffect why we use it 
  // dekho ek simpe funda hai agar in-kisime bhi changes hua to bhai wapaus rerun kardo
  // useCallback or useEffect ki dependencies ko kabhi compare mat karna  chahiye
  //bcoz useEffect depenad karta changes pe ..agar kuxh bhi change hua to phir run kardo
  // or useCallBack dependkarta uski dependecies pe
  // agar page reload hua to bhi run karjayega
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, character, passwordGenerator]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500  bg-slate-600">
      <h1 className="text-white text-center">Passowrd Generator</h1>
      <div className="flex shadow overflow-hidden  justify-center  w-full rounded-lg mb-4">
        <input
          type="text"
          placeholder="Password"
          value={password}
          className="outline-none w-full my-3 rounded-md p-1"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyToClipBoard}
          className="bg-black text-white h-8 w-16 text-center rounded-lg mt-3">
          copy
        </button>
      </div>
      <div className="flex text-sm item-center gap-x-2">
        <div className="flex  item- gap-x-1">
          <input
            type="range"
            max={100}
            min={6}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          length={length}
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            id="numberInput"
            value={numberAllowed}
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />

          <label>Number</label>
          <input
            type="checkbox"
            id="character"
            value={character}
            defaultChecked={character}
            onChange={() => {
              setCharacter((prev) => !prev);
            }}
          />

          <label>character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
