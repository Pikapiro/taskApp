import { Link, useNavigate } from "react-router-dom";
import React from "react";

export default function NevBar(props) {
  const nev = useNavigate();
  return (
    <div>
      <Link to="/allTasks">
        {" "}
        <button>all tasks</button>
      </Link>
      <Link to="/myTasks">
        {" "}
        <button>my tasks</button>
      </Link>
      <Link to="/newTask">
        {" "}
        <button>new tasks</button>
      </Link>
      <Link to="/history">
        {" "}
        <button>history</button>
      </Link>

      <button
        onClick={() => {
          nev("/");
          props.b(true);
        }}
      >
        log out
      </button>
    </div>
  );
}
