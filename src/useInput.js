import { useState } from "react";

export function useInput(initialValue) {
  const [inportValue, setInportValue] = useState(initialValue);

  const handleChage = (e) => {
    setInportValue(e.target.value);
  };
  return { inportValue, handleChage };
}
