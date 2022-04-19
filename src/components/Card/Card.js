import "./Card.css";
const Card = (props) => {
  return (
    <div className="card">
      <div className="card__info">
        <div className="card__user">
          ФИО: <span className="card__user-info">{props.name}</span>
        </div>
        <div className="card__user">
          город: <span className="card__user-info">{props.address.city}</span>
        </div>
        <div className="card__user">
          компания: <span className="card__user-info">{props.company.name}</span>
        </div>
        <a className="card__link" href="#">
          Подробнее
        </a>
      </div>
    </div>
  );
};

export default Card;
