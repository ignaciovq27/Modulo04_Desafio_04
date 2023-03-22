import { useEffect } from "react"

export default function MiApi({ setInfoPokemon, setDataPokemon }) {

    useEffect(() => {
        getPokemonData();
    }, []);

    const getPokemonData = async () => {
        try {
            // const url = 'https://pokeapi.co/api/v2/pokemon?limit=3&offset=6'; // lista 3 pokemon
            const url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'; // lista 151 pokemon

            // Consulta a la PokeAPI.
            const response = await fetch(url)
            const data = await response.json()
            setInfoPokemon(data.results)

            const urls = await Promise.all(data.results.map((result) => getUrlData(result.url)))
            setDataPokemon(urls)
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
