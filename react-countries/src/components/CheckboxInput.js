import React from "react";

export default function CheckboxInput({
  labelDescription = "Descrição do Checkbox:",
  inputValue = "Valor padrão do input",
  onCheckboxChange = null,
  id = "id_do_input_checkbox",
  autofocus = false,
}) {
  function handleInputChange() {
    if (onCheckboxChange) {
      onCheckboxChange();
    }
  }

  return (
    <div className="flex flex-row items-center space-x my-4">
      <input
        autoFocus={autofocus}
        id={id}
        type="checkbox"
        className="border"
        value={inputValue}
        onChange={handleInputChange}
      />

      <label htmlFor={id} className="text-sm mb-1 p-1">
        {labelDescription}
      </label>
    </div>
  );
}
