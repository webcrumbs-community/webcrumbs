import React, { useEffect, useState } from "react";

export default function App(props) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <button onClick={() => { setCounter(counter + 1) }}>Counter: {counter}</button>
  )
}