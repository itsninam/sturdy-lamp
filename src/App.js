import "./App.css";
import AddItem from "./Components/AddItem";
import CardList from "./Components/CardList";
import { ItemsProvider } from "./Contexts/ItemsContext";

function App() {
  return (
    <div className="App">
      <ItemsProvider>
        <AddItem />
        <CardList />
      </ItemsProvider>
    </div>
  );
}

export default App;
