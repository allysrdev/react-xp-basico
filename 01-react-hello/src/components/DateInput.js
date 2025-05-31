import React from "react";

export default function DateInput({
  labelDescription = "Descrição do label:",
  inputValue = "Valor padrão do input",
  onInputChange = null,
  id = "date_input_id",
  autofocus = false,
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }

  return (
    <div className="flex flex-col my-4">
      <label htmlFor={id} className="text-sm mb-1 p-1">
        {labelDescription}
      </label>
      <input
        autoFocus={autofocus}
        id={id}
        type="date"
        className="border"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}
