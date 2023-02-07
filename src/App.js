import React, { useState } from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
   Route, 
   Redirect,
  } from 'react-router-dom'

import Login from "./components/Login.js"
import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList';
import Logout from "./components/Logout.js"

import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <Router>
    <div className="App">

      <header>
      <div className='nav'>
      <h3> friendly </h3>
      <nav>
        <a href="/">login</a>
        <a href="/friends">friend list</a>
        <a href="/addfriend">add friend</a>
        <a href="/logout">logout</a>
      </nav>
      </div>
      </header>
        
        <Route exact path="/">
            <Login />
        </Route>

        <Route exact path="/login">
          <Redirect to="/"/>
        </Route>

        <Route exact path="/logout">
          <Redirect to="/"/>
        </Route>

        <PrivateRoute exact path="/friends" component={ FriendsList }/>

        <PrivateRoute exact path="/addfriend" component={ AddFriend }/>

        <Route exact path="/logout">
          <Logout/>
        </Route>

    </div>
    </Router>
  );
}

export default App;
