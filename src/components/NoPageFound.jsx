import React from 'react'
import "../App.css"
import pikachu from "../pikachu.png"

function NoPageFound() {
  return (
    <div className="notFound">
      <h1> Uh oh! You've found a page that doesn't exist. </h1>
      <div>
          <img src={pikachu} alt="" />
      </div>
      <p>Try clicking one of the different generations to explore the Pokédex further.</p>
    </div>
  )
}

export default NoPageFound