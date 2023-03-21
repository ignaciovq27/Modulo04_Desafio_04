import { useEffect } from "react"

export default function MiApi({ setInfo, setDataInicial }) {

    // 2. LLamamos a la función que consume la API al momento de montar el componente
    useEffect(() => {
        getPokemonData();
    }, []);

    // 1. Función que consulta la API
    const getPokemonData = async () => {
        try {
            const url = 'https://pokeapi.co/api/v2/pokemon?limit=3&offset=6';
            // const url = 'https://pokeapi.co/api/v2/pokemon/togepi';
            const response = await fetch(url)
            // console.log("Se consulta a la PokeAPI.");
            const data = await response.json()
            // console.log("Se obtiene Data de Pokemon.");
            setInfo(data.results)
            const urls = await Promise.all(data.results.map((result) => getUrlData(result.url)))
            setDataInicial(urls)
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
