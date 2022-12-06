// src/App.js
import React from "react";

function Child(posts) {
  console.log(posts);
  return <div>{posts.MotherName}</div>; //props를 받아서 출력
}

function Mother() {
  const name = "박성현";
  return <Child MotherName={name} />; //MotherName이라는 props를 만들어서 name을 넣어줌
}

function GrandFather() {
  return <Mother />;
}

function App() {
  return <GrandFather />;
}

export default App;
