import React from 'react';
import { getNewId } from '../services/idService';

export default function TextArea({
  labelDescription = 'Descrição do label:',
  textAreaValue = 'Valor padrão do textArea',
  onTextAreaChange = null,
  id = getNewId(),
  autofocus = false,
  maxLength = 230,
  rows = 4,
}) {
  function handleTextAreaChange({ currentTarget }) {
    if (onTextAreaChange) {
      const newValue = currentTarget.value;
      onTextAreaChange(newValue);
    }
  }

  const characterCount = textAreaValue.length;

  return (
    <div className="flex flex-col my-4">
      <label htmlFor={id} className="text-sm mb-1 p-1">
        {labelDescription}
      </label>
      <textarea
        autoFocus={autofocus}
        id={id}
        type="text"
        maxLength={maxLength}
        rows={rows}
        className="border"
        value={textAreaValue}
        onChange={handleTextAreaChange}
      />

      <div className="text-right mr-1">
        <span>
          {characterCount} / {maxLength}
        </span>
      </div>
    </div>
  );
}
