import logo from './logo.svg';
import './App.css';
console.log("App "  + new Date().toString());
function App() {
  return (
    <header>
      <div className="App">
            <div className="Menu">
            <nav>
            <div class="logo">
              <img src="elosi.png" alt="logo" />
              <h1>Elosi</h1>
            </div>
            <ul>
              <li>
              <a href="/Home">Home</a>
              </li>
              <li>
                <a href="/DragDrop">StarWars</a>
              </li>
              <li>
                <a href="/Formulaire">Formulaire</a>
              </li>
              <li>
                <a href="/Inputs">Inputs</a>
              </li>
            </ul>
          </nav>
            </div>
        </div>
    </header>
   

  );
}

export default App;
