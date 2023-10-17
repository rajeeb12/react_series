import { useCallback, useEffect, useRef } from "react";
import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumber] = useState(false);
  const [characterAllowed, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  //usreref hook
  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!@#$%^&*(){}[]";
    }

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  const handleCopyButton = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.selectionRange(0,99);
    window.navigator.clipboard.writeText(password);
  }, [password])


  return (
    <>
      <div className="relative bg-orange-300 w-full max-w-md mx-auto shadow-lg rounded-lg top-20 flex flex-wrap items-center justify-center gap-2 ">
        <h1 className="my-8">Password Generator</h1>
        <input
          className="rounded-sm  w-[20rem] mx-4"
          value={password}
          placeholder="password"
          readOnly
        />
        <button className="border-2 border-sky-500 bg-cyan-700 text-white rounded-lg w-20" onClick={handleCopyButton}>
          Copy
        </button>
        <div className="flex flex">
          <input
            className="cursor-pointer"
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
            ref={passwordRef}
          />
          <label>Lenght:{length}</label>
          <input
            className="cursor-pointer"
            type="checkbox"
            onChange={() => {
              setNumber((prevNumber) => !prevNumber);
            }}
          />
          <label>Number</label>
          <input
            className="cursor-pointer"
            type="checkbox"
            onChange={() => {
              setCharacter((prevCharacter) => !prevCharacter);
            }}
          />
          <label>Character</label>
        </div>
      </div>
    </>
  );
}

export default App;
