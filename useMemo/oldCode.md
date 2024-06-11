//useMemo()

import { useState, useMemo, useEffect } from "react";
import "./App.css";
export default function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFuntion(number);
  }, [number]);
  const ThemeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "#212121" : "#ccc",
      color: dark ? "#fff" : "#212121",
      padding: "2rem",
      margin: "1rem",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme Changed");
  }, [ThemeStyle]);
  return (
    <>
      <div className="container">
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button
          onClick={() => {
            setDark((prevDark) => !prevDark);
          }}
        >
          toggle
        </button>

        <div style={ThemeStyle}>{doubleNumber}</div>
      </div>
    </>
  );
}

function slowFuntion(num) {
  console.log("Calling slow function");
  for (let i = 0; i < 100000000; i++) {}
  return num * 2;
}
