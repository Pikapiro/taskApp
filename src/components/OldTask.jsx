import React from "react";

export default function OldTask(props) {
  return (
    <div>
      {" "}
      <h1>name of task{props.name}</h1>
      <p>description of task:{props.des}</p>
    </div>
  );
}
