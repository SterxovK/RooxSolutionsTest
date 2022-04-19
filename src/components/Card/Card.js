import "./Card.css";
const Card = ({ user, city, compony }) => {
  return (
    <div className="card">
      <div className="card__info">
        <div className="card__user">{`ФИО: ${user}`}</div>
        <div className="card__city">{`город: ${city}`}</div>
        <div className="card__compony">{`компания: ${compony}`}</div>
      </div>
    </div>
  );
};

export default Card;
