import React from 'react'
import "../css/Home.css"
import trainer from "../Pokémon_Emily.png"
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <h3 className="hello"><em>Hello there!</em></h3>
            <h1><span className="underline">Welcome to the world of Pokémon!</span></h1>
            <div className="row">
                <div className="col-md-8">
                    <h3>My name is Em! People call me the Pokémon Explorer!</h3>
                    <p></p>
                    <p></p>
                    <p>This world is inhabited by creatures called Pokémon! For some people, Pokémon are pets. Others use them for fights. Myself... I explore Pokémon as a profession. </p>
                    <p>Your very own Pokémon legend is about to unfold! A world of dreams and adventures with Pokémon awaits! Let's go!</p>
                </div>
                <div className="col-md-4">
                    <img className="trainer" src={trainer} alt="" />
                </div>
            </div>
            <p><br></br>On this site, you can explore all the Pokémon discovered so far, <Link to="/search">search</Link>, or take a look at the Pokémon in each generation:</p>
            <div className="tabz">
                <ul>
                    <li> <Link to="/explore/all">All</Link></li>
                    <li> <Link to="/explore/all">Generation 1</Link></li>
                    <li> <Link to="/explore/all">Generation 2</Link></li>
                    <li> <Link to="/explore/all">Generation 3</Link></li>
                    <li> <Link to="/explore/all">Generation 4</Link></li>
                    <li> <Link to="/explore/all">Generation 5</Link></li>
                    <li> <Link to="/explore/all">Generation 6</Link></li>
                    <li> <Link to="/explore/all">Generation 7</Link></li>
                </ul>
            </div>
            <p className="centre"><br></br>To learn more about Pokémon, check out the Pokédex on <a href="https://www.pokemon.com/us/pokedex/" target="_blank" rel="noopener noreferrer">pokemon.com</a> or the <a href="https://pokemondb.net/pokedex" target="_blank" rel="noopener noreferrer">Pokémon Database</a>.</p>

        </div>
    )
}

export default Home;