import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewTasks(props) {
  const Nev = useNavigate();
  const [n, setN] = useState("");
  const [d, setD] = useState("");
  const add = () => {
    props.add(n, d);
    Nev("/allTasks");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="name of the task"
        onChange={(ele) => {
          setN(ele.target.value);
        }}
      />
      <input
        type="text"
        placeholder="description of the task"
        onChange={(ele) => {
          setD(ele.target.value);
        }}
      />
      <button
        onClick={() => {
          add();
        }}
      >
        add task
      </button>
    </div>
  );
}
