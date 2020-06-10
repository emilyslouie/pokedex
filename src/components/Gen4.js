import React, { useState, useEffect } from 'react';
import '../App.css';
import PokeCard from './Card';

function Gen4() {
    const [pokemon, setPokemon] = useState([]);
    const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=107&offset=386";
  
    useEffect(() => {
      async function fetchData() {
        let response = await pokeAPICall(apiURL);
        loading(response.results);
      }
      fetchData();
    }, []);

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
        <h1>Generation 4 - Sinnoh</h1>
        </div>
        <div className="grid">
          {pokemon.map((pokemon, i) => {
            return <PokeCard key={i} pokemon={pokemon} />;
          })}
        </div>
      </div>
    );
  }
  
  export default Gen4;