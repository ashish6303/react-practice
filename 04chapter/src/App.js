import { useCallback } from "react";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [isCharAllowed, setisCharAllowed] = useState(false);
  const [isNumberAllowed, setisNumberAllowed] = useState(false);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumberAllowed) str += "0123456789";
    if (isCharAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    console.log(pass.length)
    setPassword(pass);
  }, [length, isCharAllowed, isNumberAllowed])

  useEffect(() => {generatePassword()},
  [length, isNumberAllowed, isCharAllowed])


  return (
    <div className="" >
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8  bg-gray-800 text-orange-500">
        <h2 className="text-white text-center my-3">Password Generator</h2>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="password"
            className="outline-none w-full py-1 px-3" />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              className="cursor-pointer"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="Length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isNumberAllowed}
              onChange={() =>
                setisNumberAllowed((prev) => !prev)
              }
            />
            <label htmlFor="isNumberAllowed">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isCharAllowed}
              onChange={() => {
                setisCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="isCharAllowed">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
