  
import React from "react";
import "../css/Card.css"

function Card({ pokemon }) {

  return (
    <div className="card">
      <div>
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <div>{pokemon.name}</div>
      <div>#{pokemon.id}</div>
    </div>
  );
}
export default Card;