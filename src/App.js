import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";

// components
import MiApi from "./components/MiApi";
import Button from 'react-bootstrap/Button';
import NavSearch from "./components/NavSearch";

function App() {

  const title = "Lista de Pokémon"

  // 3. estado "infoPokemon" almacenará los valores traídos desde la API
  const [infoPokemon, setInfoPokemon] = useState([]);
  const [dataInicial, setDataInicial] = useState([])

  const [search, setSearch] = useState("")
  const [isSorted, setIsSorted] = useState(false)

  const filterInfoPokemon = infoPokemon.filter((pokemon) => pokemon.name.toUpperCase().includes(search.toUpperCase().trim()))

  function ordenarNombres() {
    setIsSorted(true)
  }

  function reset() {
    setIsSorted(false)
  }

  function logicaOrdenar(a, b) {
    if (a.name < b.name) {
      return -1;
    }
  };

  return (
    <div className="App">
      <h1 className="m-3 text-align: center">{title}</h1>
      <NavSearch
        onChange={(e) => setSearch(e.target.value.trimStart())}
        value={search}
      />
      <Button
        variant="danger"
        className="m-3 text-align: center"
        onClick={ordenarNombres}
        disabled={isSorted}

      >
        Ordenar nombres
      </Button>

      <Button
        variant="secondary"
        className="m-3 text-align: center"
        onClick={reset}
        disabled={!isSorted}
      >
        Reset
      </Button>

      <MiApi
        setInfo={setInfoPokemon}
        setDataInicial={setDataInicial}
      />

      {/* 4. Mostramos la info */}
      {filterInfoPokemon.sort((a, b) => isSorted ? logicaOrdenar(a, b) : null).map((pokemon) => (
        <div className="m-3 text-align: center">
          <ul className="m-3 text-align: center" key={Math.random()}>
            <li >{pokemon.name.toUpperCase()}</li>
            <img src={dataInicial.find(data => data.name === pokemon.name)?.sprites.versions['generation-i']['red-blue'].front_default} alt="poke" width="120" height="120"></img>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
