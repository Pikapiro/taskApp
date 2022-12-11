import React from "react";
import Task from "./Task";

export default function AllTasks(props) {
  return (
    <div>
      <h1> AllTasks </h1>
      {props.arr.map((ele, i) => {
        return (
          <Task
            name={ele.name}
            description={ele.description}
            n={props.l.name}
            index={i}
            f={props.f}
          />
        );
      })}
    </div>
  );
}
