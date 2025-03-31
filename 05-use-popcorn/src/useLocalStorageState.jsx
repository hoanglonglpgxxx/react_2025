import { useState, useEffect } from "react";

export function useLocalStorageState(initState, key) {
  const [val, setVal] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? initState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify([...val]));
    },
    [val, key]
  );

  return [val, setVal];
}
