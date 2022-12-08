import React from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.

//  User 컴포넌트를 분리해서 구현
function User(props) {
  return (
    <div className="square-Style">
      {props.user.age}살 - {props.user.name}
    </div>
  );
}

const App = () => {
  const users = [
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ];
  return (
    <div className="app-style">
      {users.map((user) => {
        return <User user={user} key={user.id} />;
      })}
    </div>
  );
};

export default App;
