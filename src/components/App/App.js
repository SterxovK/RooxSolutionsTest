import "./App.css";
import Button from "../Button/Button";
import Card from "../Card/Card";
import api from "../../Api/Api";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const[info, setInfo] = useState([])

  useEffect(() => {
    api.search()
    .then((users) => 
        setInfo(users))
        .catch(err => console.log(err))
  }, []);

   
        
  return (
    <div className="App">
      <div className="app__content">
        <div className="app__filter">
          <div className="app__filter-content">
            <p className="app__filter-title">Сортировка</p>
            <Button title={"по городу"} />
            <Button title={"по компании"} />
          </div>
        </div>
        <div className="app__cards">
          <div className="app__card-content">
            <h1 className="app__cards-title">Список пользователей</h1>
            {info.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
            <p className="app__card-counter">
              Найдено {info.length} пользователей
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
