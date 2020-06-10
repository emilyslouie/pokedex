
import React, { useState } from "react";
import { Modal} from "react-bootstrap";
import "../css/Card.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function PokeCard({ pokemon }) {

  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const idNum = pokemon.id;
  const pokeName = pokemon.name;
  const typeName = pokemon.types[0].type.name;
  const pic = pokemon.sprites.front_default;
  const pokeHeight = pokemon.height;
  const pokeWeight = pokemon.weight;

  return (
    <>
      <div className="card" onClick={handleShow} style={{borderRadius: '10px'}}>
        <div>
          <img src={pic} alt="" />
        </div>
        <div>
          <p>{pokeName}</p>
          <p class="id">#{idNum}</p>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose} dialogClassName="modal-90w">
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">#{idNum} - {pokeName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="image">
          <img src={pic} alt="" />
        </div>
        <div className="dex">
        <p>Pokédex ID: #{idNum}</p>
        <p className="name">Name: {pokemon.name}</p>
        <p className="name">Type: {typeName}</p>
        <p>Height: {pokeHeight} decimetres</p>
        <p>Weight: {pokeWeight} hectograms</p>
        </div>
        </Modal.Body>
      </Modal>       
   </>
  );
}
export default PokeCard;