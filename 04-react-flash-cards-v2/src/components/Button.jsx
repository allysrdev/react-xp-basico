import React from "react";

export default function Button({
  children: description,
  onButtonClick = null,
}) {
  function handleButtonClick() {
    onButtonClick();
  }
  return (
    <button
      onClick={handleButtonClick}
      className="bg-gray-200 p-2 rounded-md m-1 w-44"
    >
      {description}
    </button>
  );
}
