import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage';
import NavPage from './NavPage';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div id="main">
        <div id="wrapper">
          <header>
          <h1>  My - Blog</h1>
          </header>
          <div id="text-static">
            <BrowserRouter>
              <MainPage />
            </BrowserRouter>
          </div>
          <div id="text-json">
            <NavPage />
          </div>
          <footer>
            Some footer 
          </footer>

        </div>
      </div>
    </div>
  );
}

export default App;
