import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from "react-router-dom";
import styled from "styled-components";

function App() {

  const labelStyle ={
    fontWeight: "bold"
  }
  return (
    <div className="App">
      <div className='nav'>
      <h3> friends database </h3>
      <nav>
        <a href="/login">login</a>
        <a href="/list">friend list</a>
        <a href="/addfriend">add friend</a>
        <a href="/logout">logout</a>
      </nav>
      </div>
      
      <div id="login">
        <h1> LOGIN </h1>
        <form>

          <label style={ labelStyle }> 
          USERNAME
          <input
            type="text"
          />
          </label>
          
          <label style={ labelStyle }> 
          PASSWORD
            <input
              type="password"
            />
          </label>
          
          <button className="loginBtn">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default App;
