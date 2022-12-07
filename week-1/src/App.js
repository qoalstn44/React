// src/App.js

import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("초기값");
  const onChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <div>
      <input type="tsxt" onChange={onChange} value={value} />
    </div>
  );
};

export default App;
