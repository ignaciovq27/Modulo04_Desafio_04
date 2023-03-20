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
            setDataInicial(data.results)
            console.log(data.results)
        }
        catch (error) {
            console.log(error)
        }
    }
    return
}
