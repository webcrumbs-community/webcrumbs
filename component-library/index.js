import React from "react";
import ReactDOM from "react-dom";
import { TextInput } from './components/TextInput';
import {Button} from './components/Button';
import {createRoot} from "react-dom/client";


const App = () => (
  
  <div>
  <Button label="Click me" onClick={() => console.log('Button clicked')} />
  <TextInput
    value={"hello"}
    // onChange={(e) => setInputValue(e.target.value)}
    placeholder="Type here"
  />
</div>
);
  

  ReactDOM.render(<App />, document.getElementById("root"));