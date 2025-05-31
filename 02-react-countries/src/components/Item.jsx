import React from "react";

export default function Item({ children: value = "Valor", label = "Nome" }) {
  return (
    <div>
      <strong className="m-2">{label}</strong>
      {value}
    </div>
  );
}
