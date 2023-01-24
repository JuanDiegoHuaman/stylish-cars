import logo from './logo.svg';
import './App.css';
import { NavBar, IemListContainer } from "./components"
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting = "Esta es mi nueva pagina web"/>
    </div>
  );
}

export default App;
