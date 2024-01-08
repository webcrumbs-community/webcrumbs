import React, { useEffect, useState } from "react";
import moment from 'moment';

export default function App(props) {
  const [state, setState] = useState(0);
  console.log("Plugin 4 is rendered at", moment().format("HH mm ss"));

  useEffect(() => {
    console.log("Plugin 4 is mounted at", moment().format("HH mm ss"));
  }, []);

  useEffect(() => {
    console.log("Plugin 4 is updated to state", state, "at", moment().format("HH mm ss"));
  }, [state]);

  return (
    <button onClick={() => setState(state+1)}>See console log</button>
  );
}