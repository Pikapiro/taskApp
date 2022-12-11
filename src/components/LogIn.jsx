import React, { useState } from "react";

export default function LogIn(props) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const checkValid = () => {
    let f = props.arr.filter((ele) => {
      if (user === ele.name && pass === ele.password) {
        return ele;
      }
    });
    console.log(f);
    if (f[0].name == user && f[0].password == pass) {
      props.b(false);
      props.lg(f[0]);
    } else {
      props.b(true);
    }
  };

  return (
    <div>
      <h1>Wolcome</h1>
      <input
        type="text"
        placeholder="user name"
        onChange={(ele) => {
          setUser(ele.target.value);
        }}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(ele) => {
          setPass(ele.target.value);
        }}
      />
      <button
        onClick={() => {
          checkValid();
        }}
      >
        Enter
      </button>
    </div>
  );
}
