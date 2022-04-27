import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <nav>
        <h3> FRIENDS </h3>
        <button><Link to="/login">LOGIN</Link></button>
        <button><Link to="/list">FRIEND LIST</Link></button>
        <button><Link to="/addfriend">ADD FRIEND.</Link></button>
        <button><Link to="/logout">LOGOUT</Link></button>
      </nav>
      <div id="login">
        <form>

          <label> USERNAME
          <input
            type="text"
          />
          </label>
          
          <label> PASSWORD
            <input
              type="password"
            />
          </label>
          
          <button>submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
