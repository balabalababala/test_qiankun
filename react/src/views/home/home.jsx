import ReactDOM from "react-dom";
// import { Router, Route } from "react-router";
// import { createHashHistory } from "history";

import {
  HashRouter as Router,
  Link,
  Route,
  BrowserRouter,
} from "react-router-dom";

import React from "react";
import "./App.css";

function Home() {
  return (
    <div className="App">
      <ul className="menu">
        <li>
          <Link to="/App">app</Link>
        </li>
      </ul>
    </div>
  );
}
export default Home;
