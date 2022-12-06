// src/App.js
import React from "react";

function Child() {
  return <div>Child</div>;
}

function Mother() {
  return <Child />;
}

function GrandFather() {
  return <Mother />;
}

function App() {
  return <GrandFather />;
}

export default App;
