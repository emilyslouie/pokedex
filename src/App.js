import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Card from './components/Card';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=151";

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
      <Header />
      <div className="section">
      </div>
      <div className="grid">
        {pokemon.map((pokemon, i) => {
          return <Card key={i} pokemon={pokemon} />;
        })}
      </div>
    </div>
  );
}

export default App;
