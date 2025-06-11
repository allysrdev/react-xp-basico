import { exclude, read, create } from './httpService';
import { getNewId } from './idService';

export async function getAllFlashCards() {
  const flashcards = read('/flashcards/');

  return flashcards;
}

export async function excludeFlashCard(cardID) {
  await exclude(`/flashcards/${cardID}`);
}

export async function createFlashCard(title, description) {
  const id = getNewId();
  const newFlashCard = await create('/flashcards', {
    id,
    title,
    description,
  });

  return newFlashCard;
}
