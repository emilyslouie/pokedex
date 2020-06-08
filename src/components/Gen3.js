import React, { useState, useEffect } from 'react';
import '../App.css';
import Card from './Card';

function Gen1() {
    const [pokemon, setPokemon] = useState([]);
    const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=135&offset=251";
  
    useEffect(() => {
      async function fetchData() {
        let response = await pokeAPICall(apiURL);
        loading(response.results);
      }
      fetchData();
    });

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
        <h1>Generation 3 - Hoenn</h1>
        </div>
        <div className="grid">
          {pokemon.map((pokemon, i) => {
            return <Card key={i} pokemon={pokemon} />;
          })}
        </div>
      </div>
    );
  }
  
  export default Gen1;