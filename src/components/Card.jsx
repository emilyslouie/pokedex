
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "../css/Card.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function PokeCard({ pokemon }) {

  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const idNum = pokemon.id;
  var pokeName = pokemon.name;
  switch (pokeName) {
    case "wormadam-plant":
      pokeName = "wormadam";
      break;
    case "mime-jr":
      pokeName = "mime jr.";
      break;
    case "giratina-altered":
      pokeName = "giratina";
      break;
    case "shaymin-land":
      pokeName = "shaymin";
      break;
    case "tornadus-incarnate":
      pokeName = "tornadus";
      break;
    case "thundurus-incarnate":
      pokeName = "thundurus";
      break;
    case "landorus-incarnate":
      pokeName = "landorus";
      break;
    case "keldeo-ordinary":
      pokeName = "keldeo";
      break;
    case "meloetta-aria":
      pokeName = "meloetta";
      break;
    case "meowstic-male":
      pokeName = "meowstic";
      break;
    case "aegislash-shield":
      pokeName = "aegislash";
      break;
    case "pumpkaboo-average":
      pokeName = "pumpkaboo";
      break;
    case "gourgeist-average":
      pokeName = "gourgeist";
      break;
    case "lycanroc-midday":
      pokeName = "lycanroc";
      break;
    case "wishiwashi-solo":
      pokeName = "wishiwashi";
      break;
    case "type-null":
      pokeName = "type: null";
      break;
    case "minior-red-meteor":
      pokeName = "minior";
      break;
    case "mimikyu-disguised":
      pokeName = "mimikyu";
      break;
    case "tapu-koko":
      pokeName = "tapu koko";
      break;
    case "tapu-lele":
      pokeName = "tapu lele";
      break;
    case "tapu-bulu":
      pokeName = "tapu bulu";
      break;
    case "tapu-fini":
      pokeName = "tapu fini";
      break;
      case "oricorio-baile":
        pokeName = "oricorio baile";
        break;
    default:
  }
  var typeName = pokemon.types[0].type.name;
  if (pokemon.types.length > 1) {
    typeName = typeName + ", " + pokemon.types[1].type.name;
  }
  const pic = pokemon.sprites.front_default;
  const pokeHeight = (pokemon.height / 10);
  const pokeWeight = (pokemon.weight / 10);

  return (
    <>
      <div className="card" onClick={handleShow} style={{ borderRadius: '10px' }}>
        <div>
          <img src={pic} alt="" loading="lazy" width="100" height="100" />
        </div>
        <div>
          <p className="name">{pokeName}</p>
          <p className="id">#{idNum}</p>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose} dialogClassName="modal-90w">
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">{idNum} - {pokeName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="image">
            <img src={pic} alt="" width="200" height="200" />
          </div>
          <div className="dex">
            <h3 className="name">{pokeName}</h3>
            <p className="num">National №: {idNum}</p>
            <p className="type">Type: {typeName}</p>
            <p>Height: {pokeHeight} m</p>
            <p>Weight: {pokeWeight} kg</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default PokeCard;