import imageRickAndMorty from "./img/rick-morty.png";
import "./App.css";
import { useState } from "react";
import { Character } from "./components/Character";

function App() {
  const [characters, setCharacters] = useState(null);

  const searchCharacter = async () => {
    const API_URL = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await API_URL.json();
    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Rick & Morty App </h1>
        {characters ? (
          <Character characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
            <img
              src={imageRickAndMorty}
              alt="Rick & Morty"
              className="img-home"
            />
            <button onClick={searchCharacter} className="btn-search">
              Search characters
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
