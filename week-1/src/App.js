// src/App.js

import React, { useState } from "react";

function Child(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.setName("배민수"); // 드디어 받은 setName을 실행합니다.
        }}
      >
        할아버지 이름 바꾸기
      </button>
      <div>{props.grandFatherName}</div>
    </div>
  );
}

function Mother(props) {
  return (
    <Child grandFatherName={props.grandFatherName} setName={props.setName} /> // 받아서 다시 주고
  );
}

function GrandFather() {
  const [name, setName] = useState("김할아");
  return <Mother grandFatherName={name} setName={setName} />; // 주고
}

function App() {
  return <GrandFather />;
}

export default App;
