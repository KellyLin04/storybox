import React from 'react';
import './App.css';
import ProfilePage from './components/ProfilePage';
import HomePage from './components/HomePage.js'
import { useState } from 'react';
import Login from './components/Login';
import Logout from './components/Logout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [googleObj, setGoogleObj] = useState();

  return (
    <Router>
      {loggedIn ?
        <Logout loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setGoogleObj={(obj) => setGoogleObj(obj)} /> 
        :
        <Login loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setGoogleObj={(obj) => setGoogleObj(obj)}/>
      }
      <p>{loggedIn ? `logged in` : `please log in`}</p>
      <Link to="/ProfilePage">profile page test</Link>
      <Switch>
        <Route exact path="/">
          <HomePage googleobj={googleObj}/>
        </Route>
        <Route exact path="/ProfilePage">
          <ProfilePage googleObj={googleObj}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
