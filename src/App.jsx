import React, { useState } from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeProvide } from "./ThemeContext";

import "./App.css";

export default function App() {
  return (
    <>
      <ThemeProvide>
        <FunctionContextComponent />
      </ThemeProvide>
    </>
  );
}
