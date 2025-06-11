import React from 'react';

export default function Button({
  children: description,
  onButtonClick = null,
  colorClassName = 'bg-gray-200',
  type = 'button',
}) {
  function handleButtonClick() {
    if (onButtonClick) {
      onButtonClick();
    }
  }
  return (
    <button
      onClick={handleButtonClick}
      className={`${colorClassName} p-2 rounded-md m-1 w-44`}
      type={type}
    >
      {description}
    </button>
  );
}
