import { useState, useCallback } from "react";

import React from "react";
import List from "./List";
import "./App.css";

export default function App() {
  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);

  const ThemeStyle = {
    backgroundColor: dark ? "#212121" : "#ccc",
    color: dark ? "#fff" : "#212121",
    padding: "2rem",
    margin: "1rem",
  };
  const getNumbers = useCallback(
    (incrementor) => {
      return [num + incrementor, num + 1 + incrementor, num + 2 + incrementor];
    },
    [num]
  );
  return (
    <div className="container">
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
      />
      <button
        onClick={() => {
          setDark((prevTheme) => !prevTheme);
        }}
      >
        toogle
      </button>
      <div style={ThemeStyle}>
        <List getItems={getNumbers} />
      </div>
    </div>
  );
}
