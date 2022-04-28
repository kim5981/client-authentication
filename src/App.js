import React, { useState } from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
   Route, 
   Redirect
  } from 'react-router-dom'

import Login from "./components/Login.js"
import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList';

function App() {


  return (
    <Router>
    <div className="App">

      <header>
      <div className='nav'>
      <h3> friends database </h3>
      <nav>
        <a href="/">login</a>
        <a href="/friends">friend list</a>
        <a href="/addfriend">add friend</a>
        <a href="/logout">logout</a>
      </nav>
      </div>
      </header>
        
        <Route exact path="/">
            <Login/>
        </Route>

        <Route exact path="/login">
          <Redirect to="/"/>
        </Route>

        <Route exact path="/friends">
          <FriendsList/>
        </Route>

        <Route exact path="/addfriend">
          <AddFriend/>
        </Route>

    </div>
    </Router>
  );
}

export default App;
