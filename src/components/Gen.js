import React, { useState, useEffect } from 'react';
import '../App.css';
import PokeCard from './Card';
import ScrollToTop from "react-scroll-to-top";

function Gen({ generation }) {
    const [pokemon, setPokemon] = useState([]);
    var limit = 0, offset = 0;
    var location = "";
    if (generation === 1) {
        limit = 151;
        offset = 0;
        location = "Kanto";
    } else if (generation === 2) {
        limit = 100;
        offset = 151;
        location = "Johto";
    } else if (generation === 3) {
        limit = 135;
        offset = 251;
        location = "Hoenn";
    } else if (generation === 4) {
        limit = 107;
        offset = 386;
        location = "Sinnoh";
    } else if (generation === 5) {
        limit = 155;
        offset = 494;
        location = "Unova";
    } else if (generation === 6) {
        limit = 71;
        offset = 649;
        location = "Kalos";
    } else if (generation === 7) {
        limit = 86;
        offset = 721;
        location = "Alola";
    }
    const apiURL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    useEffect(() => {
        async function fetchData() {
            let response = await pokeAPICall(apiURL);
            loading(response.results);
        }
        fetchData();
    }, [apiURL]);

    function pokeAPICall(url) {
        return new Promise((resolve) => {
            fetch(url)
                .then(results => results.json())
                .then(data => {
                    resolve(data);
                })
        });
    }

    const loading = async allData => {
        let pokemonData = await Promise.all(
            allData.map(async pokemon => {
                pokemon = await pokeAPICall(pokemon.url);
                return pokemon;
            })
        );
        setPokemon(pokemonData);
    };

    return (
        <div>
            <div className="section">
                <h1>Generation {generation} – {location}</h1>
            </div>
            <ScrollToTop smooth />
            <div className="grid">
                {pokemon.map((pokemon, i) => {
                    return <PokeCard key={i} pokemon={pokemon} />;
                })}
            </div>
        </div>
    );
}

export default Gen;