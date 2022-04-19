import "./App.css";
import Button from '../Button/Button'
import Card from '../Card/Card'

function App() {

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
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
