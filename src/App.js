import imageRickAndMorty from "./img/rick-morty.png";
import './App.css';

function App() {

  const searchCharacter = () => {
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'> Rick & Morty App </h1>
        <img src={imageRickAndMorty} alt='Rick & Morty' className='img-home'/>
        <button onClick={searchCharacter} className="btn-search"> Buscar personaje</button>
      </header>
    </div>
  );
}

export default App;
