// src/App.js

import React from "react";

function App() {
  function onClick() {
    setName("이몽룡");
  }
  const [name, setName] = React.useState("홍길동");
  return (
    <div>
      {name}
      <button onClick={onClick}>버튼</button>
    </div>
  );
}

export default App;
