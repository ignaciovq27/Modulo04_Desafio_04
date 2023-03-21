import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

// components
import Header from "./components/Header";
import MiApi from "./components/MiApi";
import Button from 'react-bootstrap/Button';
import NavSearch from "./components/NavSearch";

function App() {

  // 3. estado "infoPokemon" almacenará los valores traídos desde la API
  const [infoPokemon, setInfoPokemon] = useState([])
  const [dataPokemon, setDataPokemon] = useState([])

  const [search, setSearch] = useState("")
  const [isSorted, setIsSorted] = useState(false)

  const filterInfoPokemon = infoPokemon.filter((pokemon) => pokemon.name.toUpperCase().includes(search.toUpperCase().trim()))

  function sortNames() {
    setIsSorted(true)
  }

  function reset() {
    setIsSorted(false)
  }

  function logicOrder(a, b) {
    if (a.name < b.name) {
      return -1;
    }
  };

  return (
    <div className="App">
      <Header text="Lista de Pokémon" />
      <NavSearch
        onChange={(e) => setSearch(e.target.value.trimStart())}
        value={search}
      />
      <div className="m-3 d-flex justify-content-center">
        <Button
          variant="danger"
          className="m-3 text-align: center"
          onClick={sortNames}
          disabled={isSorted}

        >
          Ordenar nombres A-Z
        </Button>

        <Button
          variant="secondary"
          className="m-3"
          onClick={reset}
          disabled={!isSorted}
        >
          Reset
        </Button>

      </div>

      <MiApi
        setInfoPokemon={setInfoPokemon}
        setDataPokemon={setDataPokemon}
      />

      {/* 4. Mostramos la info */}
      {filterInfoPokemon.sort((a, b) => isSorted ? logicOrder(a, b) : null).map((pokemon) => (
        <div
          className="m-3 d-flex justify-content-center"
          key={Math.random()}
        >
          <ul className="m-3" key={Math.random()}>
            <li>
              <b>N°{dataPokemon.find(data => data.name === pokemon.name)?.id} - {pokemon.name.toUpperCase()}</b>
            </li>
            <img
              key={Math.random()}
              src={dataPokemon.find(data => data.name === pokemon.name)?.sprites.versions['generation-i']['red-blue'].front_default} alt="poke_img" width="120" height="120"></img>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
