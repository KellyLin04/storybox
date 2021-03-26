import React from 'react';
import './App.css';
import ProfilePage from './components/ProfilePage';
import HomePage from './components/HomePage.js'
import { useState } from 'react';
import Login from './components/Login';
import Logout from './components/Logout';
import logo from './components/logo.png';
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
      <div className="navbar">
        <Link to ="/" className="link"><img className="Logo" src={logo} height="150" alt="storybox logo"/></Link>
        <h1 className="title">STORY BOX</h1>
        <div>
          {loggedIn && googleObj ? 
          <div>
            <p className="headingText">
              <Link to = "/ProfilePage" className="link">
                <img class = "circular-image" src={googleObj.imageUrl} alt="profile pic" ></img>
              </Link>
            </p>
          </div>
          : 
          <p className="headingText">
              Log in to view profile
          </p>
          }
        </div>
        <div className="login-button">
          {loggedIn ?
          <Logout loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setGoogleObj={(obj) => setGoogleObj(obj)} /> 
          :
          <Login loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setGoogleObj={(obj) => setGoogleObj(obj)}/>
          }
          <p className="headingText">&nbsp; {loggedIn && googleObj ? `Welcome back, ${googleObj.name}!` : `Not logged in. Please log in.`}&nbsp;</p>
        </div>
      </div>

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
} export default App;