import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
   Route, 
   Redirect
  } from 'react-router-dom'
import axios from "axios"

import Login from "./components/Login.js"
import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList';

function App() {

  return (
    <Router>
    <div className="App">
        
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
