import React, { Component } from "react";
import { ThemeContext } from "./App";

export default class ClassContextComponent extends Component {
  themeStyle(dark) {
    return {
      backgroundColor: darkTheme ? "#333" : "#ccc",
      color: darkTheme ? "#ccc" : "#333",
      padding: "2rem",
      margin: "2rem",
    };
  }
}
