import { useState, useRef, useEffect } from "react";
import "./App.css";

export default function App() {
  const [randomText, setRandomText] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = randomText;
  }, [randomText]);

  return (
    <>
      <div className="container">
        <input
          type="text"
          value={randomText}
          onChange={(e) => setRandomText(e.target.value)}
        />

        <p>
          My name is {randomText} and it used to be {prevName.current}
        </p>
      </div>
    </>
  );
}
