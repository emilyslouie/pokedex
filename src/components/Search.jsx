import React, { useState, useEffect } from "react";
import '../App.css';
import "../css/Home.css"
import PokeCard from './Card';
import ScrollToTop from "react-scroll-to-top";
import { TextField } from "@material-ui/core";


export default function Search() {
    const [pokemon, setPokemon] = useState([]);
    const [filteredPokemon, setFilteredPokemon] = useState([]);
    const [filter, setFilter] = useState("");
    console.log(pokemon);
    const handleSearchChange = (e) => {
        setFilter(e.target.value);
    }
    const apiURL = `https://pokeapi.co/api/v2/pokemon?limit=807`;
    // useEffect(() => {
    //     const results = people.filter(person =>
    //       person.toLowerCase().includes(searchTerm)
    //     );
    //     setSearchResults(results);
    //   }, [searchTerm]);
    // useEffect(() => {
    //     axios
    //         .get(`https://pokeapi.co/api/v2/pokemon?limit=5`)
    //         .then(function (response) {
    //             //console.log(response);
    //             const { results } = response.data;
    //             setPokemon(results);
    //         });

    // }, []);

    useEffect(() => {
        if (filter === "") {
            let result = pokemon;
            setFilteredPokemon(result);
        }
        else {
            let result2;
            if (!isNaN(filter)) {
                result2 = pokemon.filter(pokemon => pokemon.id.toString().includes(filter))
            }
            else {
                result2 = pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(filter))

            }
            setFilteredPokemon(result2);
        }
    }, [filter]
    )

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
            <div className="text">
            <TextField label="Pokémon name or ID" type="search" size="small" variant="outlined" onChange={handleSearchChange} />
            </div>
            <ScrollToTop smooth />
            <div className="grid">
                {filteredPokemon.length > 0 ? filteredPokemon.map((filteredPokemon, i) => {
                    return <PokeCard key={i} pokemon={filteredPokemon} />;
                }) : <span className="default">No Pokémon found.</span>}
            </div>
        </div>
    );
}