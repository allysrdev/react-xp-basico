import React from 'react';
import { MdEdit as EditIcon, MdDelete as DeleteIcon } from 'react-icons/md';

function FlashCardItem({ card: flashCard, onDelete = null, onEdit = null }) {
  const { title, description, id } = flashCard;

  function handleDeleteClick() {
    if (onDelete) {
      onDelete(id);
    }
  }

  function handleEditClick() {
    if (onEdit) {
      onEdit(flashCard);
    }
  }
  return (
    <div className="border p-2 m-2">
      <ul className="flex flex-col space-y-4">
        <li>
          <strong>Título:</strong> {title}
        </li>
        <li>
          <strong>Descrição:</strong> {description}
        </li>
      </ul>
      <div className="mt-4 flex flex-row items-center justify-end space-x-4">
        <EditIcon onClick={handleEditClick} className="cursor-pointer" />
        <DeleteIcon onClick={handleDeleteClick} className="cursor-pointer" />
      </div>
    </div>
  );
}

export default FlashCardItem;
