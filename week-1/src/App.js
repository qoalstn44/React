import React, { useState } from "react";

function App() {
  const [number, setNumber] = React.useState(0);
  return (
    <div>
      {number}
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
