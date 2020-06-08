  
import React from "react";
import "../css/Card.css"

function Card({ pokemon }) {

  return (
    <div className="card">
      <div>
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <div>
        <p>{pokemon.name}</p>
        <p class="id">#{pokemon.id}</p>
      </div>
    </div>
  );
}
export default Card;