import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import FlashCard from '../components/FlashCard';
import FlashCards from '../components/FlashCards';
import Button from '../components/Button';
import { shuffleArray } from '../helpers/arrayHelpers';
import RadioButton from '../components/RadioButton';
import {
  createFlashCard,
  excludeFlashCard,
  getAllFlashCards,
} from '../services/apiService';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FlashCardItem from '../components/FlashCardItem';
import FlashCardForm from '../components/FlashCardForm';

export default function FlashCardsPage() {
  const [allCards, setAllCards] = useState([]);
  const [studyCards, setStudyCards] = useState([]);
  const [radioButtonShowTitle, setRadioButtonShowTitle] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [creationMode, setCreationMode] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedFlashCard, setSelectedFlashCard] = useState(null);

  useEffect(() => {
    async function getAllCards() {
      try {
        const backEndCards = await getAllFlashCards();
        setAllCards(backEndCards);

        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }

    getAllCards();
  }, []);

  useEffect(() => {
    setStudyCards(allCards.map((card) => ({ ...card, showTitle: true })));
  }, [allCards]);

  function handleShuffle() {
    const shuffledCards = shuffleArray(studyCards);

    setStudyCards(shuffledCards);
  }

  function handleRadioShowTitle() {
    const updatedCards = [...studyCards].map((card) => ({
      ...card,
      showTitle: true,
    }));
    setStudyCards(updatedCards);
    setRadioButtonShowTitle(true);
  }
  function handleRadioShowDescription() {
    const updatedCards = [...studyCards].map((card) => ({
      ...card,
      showTitle: false,
    }));
    setStudyCards(updatedCards);
    setRadioButtonShowTitle(false);
  }

  function handleToggleFlashCard(cardId) {
    const updatedCards = [...studyCards];
    const cardIndex = updatedCards.findIndex((card) => card.id === cardId);
    updatedCards[cardIndex].showTitle = !updatedCards[cardIndex].showTitle;
    setStudyCards(updatedCards);
  }

  async function handleDeleteFlashCard(id) {
    try {
      // Back-End
      excludeFlashCard(id);
      // Front-End
      setAllCards(allCards.filter((card) => card.id !== id));
      setError('');
    } catch (error) {
      setError(error.message);
    }
  }
  function handleEditFlashCard(card) {
    setCreationMode(false);
    handleSelectedTab(1);
    setSelectedFlashCard(card);
  }

  function handleCreateFlashCard() {
    setCreationMode(true);
    setSelectedFlashCard(null);
  }

  function handleSelectedTab(tabIndex) {
    setSelectedTab(tabIndex);
  }

  async function handlePersist(title, description) {
    if (creationMode) {
      try {
        // Back-End
        const newFlashCard = await createFlashCard({ title, description });

        // Front-end
        setAllCards([...allCards, newFlashCard]);
      } catch (err) {
        setError(err.message);
      }
    } else {
      setAllCards(
        allCards.map((card) => {
          if (card.id === selectedFlashCard.id) {
            return { ...card, title, description };
          }
          return card;
        })
      );
    }
    setSelectedFlashCard(null);
    setCreationMode(true);
  }

  let mainJsx = loading ? (
    <div className="flex justify-center my-4">
      <Loading />
    </div>
  ) : (
    <>
      <Tabs selectedIndex={selectedTab} onSelect={handleSelectedTab}>
        <TabList>
          <Tab>Listagem</Tab>
          <Tab>Cadastro</Tab>
          <Tab>Estudo</Tab>
        </TabList>

        <TabPanel>
          {allCards.map((card) => {
            return (
              <FlashCardItem
                onEdit={handleEditFlashCard}
                onDelete={handleDeleteFlashCard}
                key={card.id}
                card={card}
              />
            );
          })}
        </TabPanel>
        <TabPanel>
          <div className="my-4">
            <Button onButtonClick={handleCreateFlashCard}>
              Novo Flash Card
            </Button>
          </div>
          <FlashCardForm
            selectedFlashCard={selectedFlashCard}
            creationMode={creationMode}
            onPersist={handlePersist}
          />
        </TabPanel>
        <TabPanel>
          <div className="text-center mb-4">
            <Button onButtonClick={handleShuffle}>Embaralhar Cards</Button>
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
            {studyCards.map(({ id, description, title, showTitle }) => {
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
        </TabPanel>
      </Tabs>
    </>
  );

  if (error) {
    mainJsx = <Error>{error}</Error>;
  }

  return (
    <>
      <Header>React-Flash-Cards-v2</Header>

      <Main>{mainJsx}</Main>
    </>
  );
}
