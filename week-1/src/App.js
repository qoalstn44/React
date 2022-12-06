import React from "react";
function App() {
  // <---- 자바스크립트 영역 ---->
  const handClike = () => {
    alert("클릭!");
  };
  return (
    /* <---- HTML/JSX 영역  ---->*/
    <div
      style={{
        height: "100vh",
        display: " flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span>내가만든 APP 컨포넌트 입니다.</span>
      <button onClick={handClike}>클릭!</button>
    </div>
  );
}

export default App;
