import { useState, useEffect } from "react";
import Button from "../Button/Button";
import "../Button/Button.css";

function CardDetailed({ user, }) {
  //const { userInfo } = props;
  //if (!userInfo) return null;
  const { name, username, email, address, phone, website } = user;
  const [readOnly, setReadOnly] = useState(true);
  

//ПОКА НЕ ПОЛУЧИЛОСЬ СДЕЛАТЬ РЕДАКТИРЕМЫМ
  

  function handleBtnEditClick() {
    setReadOnly(false);
  }
  // function handleChangeName(e) {
  //   setnewName(e.target.value);
  // }

  return (
    <div className="card__detailed">
      <div className="card__detailed-head">
        <h2>Профиль пользователя</h2>
        <button className="button" onClick={handleBtnEditClick}>
          Редактировать
        </button>
      </div>
      <form className="card__detailed-form">
        <p>Name</p>
        <input
          value={name || ""}
          readOnly={readOnly}
          type="text"
          //onChange={handleChangeName}
        />
        <p>User name</p>
        <input value={username || ""} readOnly />
        <p>E-mail</p>
        <input value={email || ""} readOnly />
        <p>Stret</p>
        <input value={address?.street || ""} readOnly />
        <p>City</p>
        <input value={address?.city || ""} readOnly />
        <p>Zip code</p>
        <input value={address?.zipcode || ""} readOnly />
        <p>Phone</p>
        <input value={phone || ""} readOnly />
        <p>Website</p>
        <input value={website || ""} readOnly />
        <p>Comment</p>
        <textarea></textarea>
        <Button title={"Отправить"} />
      </form>
    </div>
  );
};

export default CardDetailed;
