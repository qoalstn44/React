// // src/App.js

// import { useState } from "react";

// const App = () => {
//   const [number, setNumber] = useState(0);
//   return (
//     <div>
//                         {/* 버튼을 누르면 1씩 플러스된다. */}
//       <div>{number}</div>
//       <button
//         onClick={() => {
//           setNumber(number + 1); // 첫번째 줄
//           setNumber(number + 1); // 두번쨰 줄
//           setNumber(number + 1); // 세번째 줄
//         }}
//       >
//         버튼
//       </button>
//     </div>
//   );
// }

// export default App;

// src/App.js

//import { useState } from "react";

//const App = () => {
//const [number, setNumber] = useState(0);
// return (
//  <div>
//    {/* 버튼을 누르면 3씩 플러스 된다. */}
//     <div>{number}</div>
//     <button
//      onClick={() => {
//       setNumber((previousState) => previousState + 1);
//       setNumber((previousState) => previousState + 1);
//        setNumber((previousState) => previousState + 1);
//      }}
//     >
//       버튼
//     </button>
//    </div>
// );
//};

//export default App;
import { useState, useEffect } from "react";

export default function FunctionComponent() {
  const [color, setColor] = useState();

  const changeColor = (color) => {
    setColor(color);
  };

  useEffect(() => {
    console.log("컴포넌트가 마운트 되었습니다.");
  }, []);

  useEffect(() => {
    console.log("컴포넌트가 마운트 되었습니다.");
  }, [color]);

  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "100px",
          margin: "auto",
          backgroundColor: color,
          border: "1px solid #ccc",
        }}
      ></div>
      <div>
        <button onClick={() => changeColor("red")}>빨간색</button>
        <button onClick={() => changeColor("blue")}>파란색</button>
        <button onClick={() => changeColor("green")}>초록색</button>
        <button onClick={() => changeColor("black")}>검은색</button>
      </div>
    </div>
  );
}
