import React from "react";
import { Link } from "react-router-dom";

const PokeCard = ({ id, image, name, type, _callback }) => {
  const style = type + " overview-container";
    
  function deletePokemon() {
    return (
      <div>
      <div class="overlay" id="overlay" hidden>
        <div class="confirm-box">
          </div>
          <h2>Confirmation</h2>
          <p>Are you sure to execute this action?</p>
          <button onclick="isConfirm(true)">Yes</button>
          <button onclick="isConfirm(false)">No</button>
        </div>
      </div>
    )
  }

  return (
    <Link className={style} to={`/${name}`} 
    style={{textDecoration: 'none', color: "#000"}}>
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name}</h3>
        <small>Type: {type}</small>
        <Link to={"/pokemon/edit"}>
          <button className="edit-button" type="button">
            Edit
          </button>
        </Link>
        <Link to={"/"}>
          <button onClick={deletePokemon} className="delete-button" type="button">
            Delete
          </button>
        </Link>
      </div>
    </Link>
  );
};

export default PokeCard;
