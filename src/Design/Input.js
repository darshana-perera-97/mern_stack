import React from "react";
import axios from "axios";

export default function Input() {
  const [name, setName] = React.useState("");
  const [des, setDes] = React.useState("");

  return (
    <div>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        value={des}
        onChange={(e) => {
          setDes(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(name + "+" + des);
          const newItem = {
            title: name,
            description: des,
          };
        }}
      >
        Save
      </button>
    </div>
  );
}
