import React from "react";
import Item from "./Item";

export default function Country({ children: country, onCountryClick = null }) {
  if (!country) {
    return <div>Impossível renderizar o país.</div>;
  }

  const { name, code } = country;

  function handleCountryClick() {
    if (onCountryClick) {
      onCountryClick(code);
    }
  }
  return (
    <div className="border p-2 m-2" onClick={() => handleCountryClick()}>
      <ul>
        <Item label="Nome:">{name}</Item>
        <Item label="Código:">{code}</Item>
      </ul>
    </div>
  );
}
