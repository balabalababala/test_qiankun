import ReactDOM from "react-dom";

import {
  HashRouter as Router,
  Link,
  Route,
  BrowserRouter,
} from "react-router-dom";

import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ul className="menu">
        <li>
          <Link to="/Home">home</Link>
        </li>
      </ul>
    </div>
  );
}
export default App;
