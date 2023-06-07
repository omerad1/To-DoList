import React, { useState } from "react";
import List from "./List";

function App() {
  const [toDos, settoDos] = useState([]);
  const [val, setVal] = useState("");
  function handleChange(event) {
    setVal(event.target.value);
  }

  function handleSubmit() {
    const temp = [val, ...toDos];
    settoDos(temp);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" />
        <button onClick={handleSubmit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <List list={toDos} />
      </div>
    </div>
  );
}

export default App;
