import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PokeCard = ({ id, image, name, type, _callback }) => {
  const style = type + " overview-container";
    
  async function deletePokemon(ID) {

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
          <button onClick={()=>deletePokemon(id)} className="delete-button" type="button">
            Delete
          </button>
        </Link>
      </div>
    </Link>
  );
};

export default PokeCard;
