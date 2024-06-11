//useState


import { useState } from "react";
import "./App.css";

export default function App() {
  const [state, setState] = useState({ count: 4, theme: "kesari" });
  const count = state.count;
  const theme = state.theme;
  // wrong method
  // function increment() {
  //   setState((prevState) => {
  //     return { count: prevState.count + 1 };
  //   });
  // }

  function increment() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  }
  function decrement() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  }
  return (
    <>
      <div className="container">
        <button onClick={increment}>&#43;</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={decrement}>&#8722;</button>
      </div>
    </>
  );
}


//Basic useEffect
import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [state, setState] = useState("post");
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${state}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [state]);

  return (
    <>
      <div className="container">
        <button onClick={() => setState("posts")}>Posts</button>
        <button onClick={() => setState("users")}>Users</button>
        <button onClick={() => setState("comments")}>Comments</button>

        <h1>{state}</h1>

        {items.map((item) => {
          return <pre key={Math.random()}>{JSON.stringify(item)}</pre>;
        })}
      </div>
    </>
  );
}


//complex useEffect

import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  function handleWindowResize(){
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
   window.addEventListners('resize', handleWindowResize)

//for cleanup the event listners
   return ()=>{
    window.removeEventListners('resize' , handleWindowResize)
   }
  }, []);

  return (
    <>
      <div className="container">
        <h1>windowWidth</h1>
      </div>
    </>
  );
}


//useContext
[app.jsx]
import React, { useState } from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import "./App.css";

export const ThemeContext = React.createContext();
export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  function toggleTheme() {
    setDarkTheme((prevTheme) => !prevTheme);
  }
  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>toogle theme</button>
        <FunctionContextComponent />
      </ThemeContext.Provider>
    </>
  );
}

[FunctionContextComponent.jsx]
import React, { useContext } from "react";
import { ThemeContext } from "./App";

export default function FunctionContextComponent() {
  const darkTheme = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return <div style={themeStyles}>FunctionContextComponent</div>;
}
