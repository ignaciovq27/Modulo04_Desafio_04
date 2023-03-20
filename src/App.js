import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

// components
import MiApi from "./components/MiApi";
import Button from 'react-bootstrap/Button';
import NavSearch from "./components/NavSearch";

function App() {

  const title = "Lista de Pokémon"

  // 3. estado "infoPokemon" almacenará los valores traídos desde la API
  const [infoPokemon, setInfoPokemon] = useState([]);
  const [dataInicial, setDataInicial] = useState([]);
  const [search, setSearch] = useState([])

  //Funcion para filtrar Pokemon
  // const filtrarPokemon = (search) => {
  //   const pokemonFiltrados = infoPokemon.filter((pokemon) => {
  //     return (
  //       pokemon.name.includes(search.toUpperCase())
  //       )
  //   })
  //   setpokemonFiltrados([...pokemonFiltrados])
  //   // console.log(search)
  // }

  // const filtrarPokemon = () => {}
  const filterInfoPokemon = infoPokemon.filter((pokemon) => pokemon.name.toUpperCase().includes(search))

  // //Funcion ordenar nombres
  // function ordenarNombres() {
  //   filterInfoPokemon.sort();
  //   // infoPokemon.reverse();
  //   console.log(filterInfoPokemon)
  // }

  // Función de comparación
  // function ordenarNombres(a, b) {
  //   const nombreA = a.name.toUpperCase();
  //   const nombreB = b.name.toUpperCase();

  //   let comparacion = 0;
  //   if (nombreA > nombreB) {
  //     comparacion = 1;
  //   } else if (nombreA < nombreB) {
  //     comparacion = -1;
  //   }
  //   return comparacion;
  // }

  // const ordenar = () => {
  //   console.log("Ordenar")
  //   function ordenarNombres(a, b) {
  //     const nombreA = a.name.toUpperCase();
  //     const nombreB = b.name.toUpperCase();

  //     let comparacion = 0;
  //     if (nombreA > nombreB) {
  //       comparacion = 1;
  //     } else if (nombreA < nombreB) {
  //       comparacion = -1;
  //     }
  //     return comparacion;
  //   }
  //   filterInfoPokemon.sort(ordenarNombres)
  //   setSearch(filterInfoPokemon)
  //   console.log(filterInfoPokemon)
  // }

  function ordenarNombres() {
    infoPokemon.sort(function (a, b) {
      // if (a.name > b.name) {
      //   return 1;
      // }
      if (a.name < b.name) {
        return -1;
      }
      // // a must be equal to b
      // return 0;
    });
    console.log(infoPokemon)
  }

  function reset() {
    setInfoPokemon(dataInicial)
    console.log(infoPokemon)
  }

  return (
    <div className="App">
      <h1 className="m-3 text-align: center">{title}</h1>
      <NavSearch onChange={(e) => setSearch(e.target.value.toUpperCase())} />
      <Button
        variant="danger"
        className="m-3 text-align: center"
        onClick={ordenarNombres}
      >
        Ordenar nombres
      </Button>

      <Button
        variant="secondary"
        className="m-3 text-align: center"
        onClick={reset}
      >
        Reset
      </Button>

      <MiApi
        setInfo={setInfoPokemon}
        setDataInicial={setDataInicial}
      />
      {/* 4. Mostramos la info */}
      {filterInfoPokemon.map((pokemon) => (
        <ul className="m-3 text-align: center" key={Math.random()}>
          <li >{pokemon.name.toUpperCase()}</li>
        </ul>
      ))}

      
    </div>
  );
}

export default App;
