import "./Card.css";
import React from "react";


const Card = (props) => {
  const { onCardClick, user } = props;
  if (!user) return null
  const { name, address, company, id } = user;

 

 function handleClick() {
   onCardClick(props.user);
 }

  return (
    <li className="card">
      <div className="card__info">
        <div className="card__user">
          ФИО: <span className="card__user-info">{name}</span>
        </div>
        <div className="card__user">
          город: <span className="card__user-info">{address?.city}</span>
        </div>
        <div className="card__user">
          компания:{" "}
          <span className="card__user-info">{company?.name}</span>
        </div>
        
          <button className="card__link" onClick={handleClick}>Подробнее</button>
        
      </div>
    </li>
  );
};

export default Card;
