import React, { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import FlashCard from "../components/FlashCard";
import FlashCards from "../components/FlashCards";
import { allFlashCards } from "../data/allFlashCards";
import Button from "../components/Button";
import { shuffleArray } from "../helpers/arrayHelpers";
import RadioButton from "../components/RadioButton";

export default function FlashCardsPage() {
  const [allCards, setAllCards] = useState(allFlashCards);
  const [radioButtonShowTitle, setRadioButtonShowTitle] = useState(true);

  function handleButtonClick() {
    const shuffledCards = shuffleArray(allCards);

    setAllCards(shuffledCards);
  }

  function handleRadioShowTitle() {
    const updatedCards = [...allCards].map((card) => ({
      ...card,
      showTitle: true,
    }));
    setAllCards(updatedCards);
    setRadioButtonShowTitle(true);
  }
  function handleRadioShowDescription() {
    const updatedCards = [...allCards].map((card) => ({
      ...card,
      showTitle: false,
    }));
    setAllCards(updatedCards);
    setRadioButtonShowTitle(false);
  }

  function handleToggleFlashCard(cardId) {
    const updatedCards = [...allCards];
    const cardIndex = updatedCards.findIndex((card) => card.id === cardId);
    updatedCards[cardIndex].showTitle = !updatedCards[cardIndex].showTitle;
    setAllCards(updatedCards);
  }
  return (
    <>
      <Header>React-Flash-Cards-v1</Header>

      <Main>
        <div className="text-center mb-4">
          <Button onButtonClick={handleButtonClick}>Embaralhar Cards</Button>
        </div>

        <div className="flex flex-row items-center justify-center space-x-4 m-4">
          <RadioButton
            id="RadioButtonShowTittle"
            name="showInfo"
            buttonChecked={radioButtonShowTitle}
            onButtonClick={handleRadioShowTitle}
          >
            Mostrar título
          </RadioButton>
          <RadioButton
            id="RadioButtonShowDescription"
            name="showInfo"
            buttonChecked={!radioButtonShowTitle}
            onButtonClick={handleRadioShowDescription}
          >
            Mostrar descrição
          </RadioButton>
        </div>
        <FlashCards>
          {allCards.map(({ id, description, title, showTitle }) => {
            return (
              <FlashCard
                showFlashCardTitle={showTitle}
                key={id}
                id={id}
                description={description}
                title={title}
                onButtonClick={handleToggleFlashCard}
              />
            );
          })}
        </FlashCards>
      </Main>
    </>
  );
}
