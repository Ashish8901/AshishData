import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


const Parent = () => {
  const [fieldVal, setfieldVal] = useState("");

const onUpdate = (val) => {
  setfieldVal(val)
};

  return (
    <div>
      <h2>Parent</h2>
      Value in Parent Component State: {fieldVal}
      <br/>
      <Child onUpdate={onUpdate} />
      <br />
      
    </div>
  )
}

const Child = (props) => {
  const [fieldVal, setfieldVal] = useState("");

const update = (e) => {
  console.log(e.target.value);
  props.onUpdate(e.target.value);
  setfieldVal(e.target.value);
};

  return (
    <div>
      <h4>Child</h4>
      <input
        type="text"
        placeholder="type here"
        onChange={update}
        value={fieldVal}
      />
    </div>
  )
}




ReactDOM.render(
  <BrowserRouter>
  {/* <App /> */}
  {/* <Homepage/> */}
  <Parent/>
</BrowserRouter>,
document.getElementById("root")
); 


// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );



