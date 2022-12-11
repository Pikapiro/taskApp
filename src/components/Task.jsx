import React, { useState } from "react";

export default function Task(props) {
  const [e, setE] = useState(true);
  const expend = () => {
    if (e == false) {
      return (
        <div>
          <p>name of task{props.name}</p>
          <p>description of task:{props.description}</p>
          <button
            onClick={() => {
              props.f(props.index);
            }}
          >
            finish task
          </button>
        </div>
      );
    }
  };

  return (
    <div
      onClick={() => {
        setE(!e);
      }}
    >
      <h1>name: {props.name}</h1>
      <p>the task operator: {props.n}</p>
      {expend()}
    </div>
  );
}
