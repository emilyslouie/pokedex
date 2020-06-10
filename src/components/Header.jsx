import React from 'react'
import "../css/Header.css"
import pokemon from "../pokemon.png";

function Header() {
  return (
    <nav className="Header">
      <span className ="nav">
      <div>
          <img className="logo" src={pokemon} alt="" />
        </div>
        <h1>Pokédex</h1>
      </span>
    </nav>
  )
}

export default Header