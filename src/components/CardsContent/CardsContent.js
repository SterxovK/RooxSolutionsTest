import Card from "../Card/Card";
import api from "../../Api/Api";
import { useState } from "react";
import { useEffect } from "react";

const CardsContent = ({ onCardClick }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .search()
      .then((users) => setUsers(users))
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="app__cards-content">
      <h1 className="app__cards-title">Список пользователей</h1>
      <ul className="app_cards-item">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          users.map((user) => {
            return (
              <Card key={`${user.id}`} user={user} onCardClick={onCardClick} />
            );
          })
        )}
      </ul>
      <p className="app__card-counter">Найдено {users.length} пользователей</p>
    </div>
  );
};

export default CardsContent
