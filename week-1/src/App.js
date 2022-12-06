// src/App.js
import React from "react";

function Child(posts) {
  return (
    <div>
      <h3>할머니 이름: {posts.GrandFatherName}</h3>
    </div>
  );
}

function Mother(props) {
  console.log(props);
  return <Child GrandFatherName={props.GrandFatherName} />;
}

function GrandFather() {
  const name = "할머니";
  return <Mother GrandFatherName={name} />;
}

function App() {
  return <GrandFather />;
}

export default App;
