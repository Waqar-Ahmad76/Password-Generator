import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberIncluded, setNumberIncluded] = useState(false);
  const [charIncluded, setCharIncluded] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef= useRef(null);


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberIncluded) {
      string += "0123456789";
    }
    if (charIncluded) {
      string += "!@#$%^&*()-_+=[]{}|;:,.<>?/~`";
    }
    for (let i = 0; i < length; i++) {
      pass += string.charAt(Math.floor(Math.random() * string.length));
    }
    setPassword(pass);
  }, [length, numberIncluded, charIncluded]);



  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);


  const  copyToClipboard=()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  } 


  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-400 bg-gray-700">
        <div className=" flex shadow rounded-lg overflow-hidden mb-4 justify-center items-center">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="Password "
            readOnly={true}
            ref={passwordRef}
          />

          <button className="px-3 py-1 bg-blue-400 text-white "
          onClick={copyToClipboard}
          >Copy</button>
        </div>


        <div className="flex text-sm gap-x-2">


          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length"> Length: {length}</label>
          </div>


          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberIncluded}
              className="outline-none w-full py-1 px-3 bg-white"
              onChange={() =>
                setNumberIncluded((prev) => {
                  return !prev;
                })
              }
              readOnly={true}
            />
            <label> Number</label>
            <input
              type="checkbox"
              defaultChecked={charIncluded}
              className="outline-none w-full py-1 px-3 bg-white"
              onChange={() =>
                setCharIncluded((prev) => {
                  return !prev;
                })
              }
              readOnly={true}
            />
            <label> Characters</label>
          </div>


        </div>
      </div>
    </>
  );
}

export default App;
