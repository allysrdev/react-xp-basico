import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import TextInput from "./components/TextInput";
import DateInput from "./components/DateInput";
import { getAgeFrom } from "./helpers/dateHelpers";
import { getNewId } from "./services/idService";
import Timer from "./components/Timer";
import CheckboxInput from "./components/CheckboxInput";
import OnlineOffline from "./components/OnlineOffline";

function App() {
  const [name, setName] = useState("Rafael Gomide");
  const [birthDate, newBirthDate] = useState("2025-05-29");
  const [showTimer, setShowTimer] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    function toggleOnline() {
      setIsOnline(true);
    }

    function toggleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", () => toggleOnline());
    window.addEventListener("offline", () => toggleOffline());

    return () => {
      window.removeEventListener("online", () => toggleOnline());
      window.removeEventListener("offline", () => toggleOffline());
    };
  });

  function handleNameChange(newName) {
    setName(newName);
  }

  function handleBirthdateChange(newDate) {
    newBirthDate(newDate);
  }

  function toggleShowTimer() {
    setShowTimer((currentShowTimer) => !currentShowTimer);
  }

  return (
    <>
      <Header>React-Hello</Header>

      <Main>
        <OnlineOffline isOnline={isOnline} />
        {showTimer && (
          <div className="text-right mt-1">
            <Timer />
          </div>
        )}
        <CheckboxInput
          labelDescription="Mostrar cronômetro"
          onCheckboxChange={toggleShowTimer}
        />
        <TextInput
          labelDescription="Digite o seu nome:"
          inputValue={name}
          onInputChange={handleNameChange}
          id={getNewId()}
          autofocus={true}
        />
        <DateInput
          labelDescription="Digite a sua data de nascimento:"
          inputValue={birthDate}
          onInputChange={handleBirthdateChange}
          id={getNewId()}
        />
        <div className="container mx-auto">
          <h2>
            O seu nome é {name}, com {name.length} caracters, e idade é{" "}
            {getAgeFrom(birthDate)} anos.
          </h2>
        </div>
      </Main>
    </>
  );
}

export default App;
