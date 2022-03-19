import logo from "./logo.svg";
import "./App.css";

import axios from "axios";

const spotify_secret_key = process.env.REACT_APP_SPOTIFY_KEY;

function retrieveData() {
  console.log("iniRetrieve");
  axios.get("");
}

retrieveData();

console.log(process.env.REACT_APP_SPOTIFY_KEY);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
