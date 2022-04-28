import React, { useState } from 'react';
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

  const login = ({ username, password }) => {
    axios.post("http://localhost:9000/api/login", { username, password })
      .then(res => {
        debugger
        // //store token in browser local storage 
        // const token = res.data.token
        // window.localStorage.setItem("token", token)
        // //redirect to friends list
      })
      .catch(err => {
        debugger // to do: render err message on screen
      })
  }

  return (
    <Router>
    <div className="App">
        
        <Route exact path="/">
            <Login login={ login }/>
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
