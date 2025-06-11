import React from 'react';
import { getNewId } from '../services/idService';

export default function TextInput({
  labelDescription = 'Descrição do label:',
  inputValue = 'Valor padrão do input',
  onInputChange = null,
  id = getNewId(),
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
        type="text"
        className="border"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}
