import "./App.css";
import Button from "../Button/Button";
import CardsContent from "../CardsContent/CardsContent";
import CardDetailed from "../CardDetailed/CardDetailed";
import {useState} from "react";




function App() {
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    //console.log(user)
    setSelectedCard(card);
  };

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
        <CardsContent onCardClick={handleCardClick} />
        <CardDetailed user={selectedCard}/>
      </div>
    </div>
  );
}

export default App;
