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
// import { Editor } from "@toast-ui/react-editor";
// import "@toast-ui/editor/dist/toastui-editor.css";

// export default function ToastEditor() {
//   return (
//     <div>
//       <h3>### Editor Toast</h3>
//       <Editor
//         placeholder="내용을 입력해주세요."
//         previewStyle="vertical" // 미리보기 스타일 지정
//         height="300px" // 에디터 창 높이
//         initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
//         toolbarItems={[
//           // 툴바 옵션 설정
//           ["heading", "bold", "italic", "strike"],
//           ["hr", "quote"],
//           ["ul", "ol", "task", "indent", "outdent"],
//           ["table", "image", "link"],
//           ["code", "codeblock"],
//         ]}
//       ></Editor>
//     </div>
//   );
// }

import { useInput } from "./useInput";

function App() {
  const { inportValue, handleChnage } = useInput("나는 커스텀 훅입니다.");
  const { inportValue2, handleChage2 } =
    useInput("나는 두번째 커스텀 훅입니다.");

  const handleInport = () => {
    alert(inportValue);
    // setInportValue("");
  };
  return (
    <div>
      <h1>useInput</h1>
      <input type="text" value={inportValue} onChange={handleChnage} />
      <input type="text" value={inportValue2} onChange={handleChage2} />
      <button onClick={handleInport}>입력</button>
    </div>
  );
}

export default App;
