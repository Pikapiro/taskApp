import React from "react";
import OldTask from "./OldTask";

export default function History(props) {
  return (
    <div>
      <h1> History </h1>
      {props.arr.map((ele) => {
        return <OldTask name={ele.name} des={ele.description} />;
      })}
    </div>
  );
}
