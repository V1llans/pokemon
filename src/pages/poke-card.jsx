import React from "react";
import { Link } from "react-router-dom";

const PokeCard = ({ id, image, name, type, _callback }) => {
  const style = type + " overview-container";
    
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
        <button className="edit-button" type="button">
          Edit
        </button>
        <button className="delete-button" type="button">
          Delete
        </button>
      </div>
    </Link>
  );
};

export default PokeCard;
