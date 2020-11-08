import './App.css';
import Dinosaur from './Dinosaur';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       My Dinosaurs App
      </header>
      <Dinosaur name='Allosaurus' diet='meat'/>
      <Dinosaur name='Apatosaurus' diet='plants'/>
    </div>
  );
}

export default App;
