import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
   Route, 
   Switch
  } from 'react-router-dom';


import Login from "./components/Login.js"

function App() {

  return (
    <div className="App">
      
      <Router>
        <Switch>
        <Route>
            <Login path="/"/>
          </Route>
        </Switch>
      </Router>
      

      
    </div>
  );
}

export default App;
