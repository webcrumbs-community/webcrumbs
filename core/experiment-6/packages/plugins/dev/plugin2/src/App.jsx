import React, { useEffect, useState } from "react";

export default function App(props) {
  const [text, setText] = useState('');

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
      Your input: {text}
    </div>
  )
}