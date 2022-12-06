// components/Child.js

import React from "react";

function Child({ name = "기본이름" }) {
  return <div>내 이름은 {name} 입니다. </div>; //defaultProps 사용예시
}

// Child.defaultProps = {
//   name: "기본이름",
// }; //defaultProps 사용예시
export default Child;
