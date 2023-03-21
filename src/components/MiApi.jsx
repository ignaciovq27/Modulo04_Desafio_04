import { useEffect } from "react"

export default function MiApi({ setInfoPokemon, setDataPokemon }) {

    // 2. LLamamos a la función que consume la API al momento de montar el componente
    useEffect(() => {
        getPokemonData();
    }, []);

    // 1. Función que consulta la API
    const getPokemonData = async () => {
        try {
            // const url = 'https://pokeapi.co/api/v2/poknemon?limit=151&offset=0'; // lista 151 pokemon
            const url = 'https://pokeapi.co/api/v2/pokemon?limit=3&offset=6'; // lista 3 pokemon
            // const url = 'https://pokeapi.co/api/v2/pokemon/squirtle'; // lista 1 pokemon especifico
            const response = await fetch(url)
            // console.log("Se consulta a la PokeAPI.");
            const data = await response.json()
            // console.log("Se obtiene Data de Pokemon.");
            setInfoPokemon(data.results)

            const urls = await Promise.all(data.results.map((result) => getUrlData(result.url)))
            setDataPokemon(urls)
            // console.log(data.results.map(result => result.url))
        }
        catch (error) {
            console.log(error)
        }
    }

    const getUrlData = async (url) => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            return data
        }
        catch (error) {
            console.log(error)
        }
    }
}
