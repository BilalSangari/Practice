import { useEffect, useState } from "react";
import "./Pokemon.css";

export const HowNotToFetchApi = () => {
    const [apiData, setApiData] = useState(null)

      const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

      const fetchPokemon = () => {
        fetch(API).then((res) => res.json()).then((data) => {
            setApiData(data);
        })
        .catch((error) => console.log(error))
      }

      useEffect(() => {
        fetchPokemon();
      }, []);
    return(
        <section className="contianer">
            <header>
                <h1>Let's Catch Pokemon</h1>
            </header>
            <ul className="card-demo">
                <li className="pokemon-card">
                    <figure></figure>
                </li>
            </ul>
        </section>
    )
}