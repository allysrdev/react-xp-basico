import React, { useState } from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';
import Button from './Button';
import Error from './Error';

function FlashCardForm({
  creationMode = true,
  onPersist = null,
  selectedFlashCard,
}) {
  const backgroundClassName = creationMode ? 'bg-green-100' : 'bg-yellow-100';
  const [title, setTitle] = useState(selectedFlashCard?.title || '');
  const [description, setDescription] = useState(
    selectedFlashCard?.description || ''
  );
  const [error, setError] = useState('');

  function handleTitleChange(newTitle) {
    setTitle(newTitle);
  }

  function handleTextAreaChange(newDescription) {
    setDescription(newDescription);
  }

  function validateFields() {
    return title.trim() !== '' && description.trim() !== '';
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    clearFields();

    if (validateFields()) {
      setError('');
      if (onPersist) {
        onPersist(title, description);
      }
    } else {
      setError('Você deve preencher todos os campos.');
    }
  }

  function handleFormReset() {
    clearFields();
  }

  function clearFields() {
    setTitle('');
    setDescription('');
  }
  return (
    <form className={`${backgroundClassName} p-4`} onSubmit={handleFormSubmit}>
      <h2 className="text-center font-semibold">Manutenção do Flash Card</h2>
      <TextInput
        labelDescription="Título:"
        inputValue={title}
        onInputChange={handleTitleChange}
      />
      <TextArea
        labelDescription="Descrição:"
        textAreaValue={description}
        onTextAreaChange={handleTextAreaChange}
      />
      <div className="flex justify-between flex-col sm:flex-row">
        {error.trim() !== '' ? <Error>{error}</Error> : <span>&nbsp;</span>}
        <div className="flex items-center justify-end">
          <Button
            onButtonClick={handleFormReset}
            colorClassName="bg-red-300"
            type="reset"
          >
            Limpar
          </Button>
          <Button colorClassName="bg-green-400" type="submit">
            Salvar
          </Button>
        </div>
      </div>
    </form>
  );
}

export default FlashCardForm;
