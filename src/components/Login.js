import React, { useState } from 'react'

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';
import addUser from '../utils/firestore.js'


const clientId = '998417810145-24a0001s9pne9f2cuuf4fb9lrkqrjlje.apps.googleusercontent.com' //insert client id here

function Login(props) {

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      `Logged in successfully! Welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
=======
      `Welcome ${res.profileObj.name}!`
>>>>>>> Stashed changes
=======
      `Welcome ${res.profileObj.name}!`
>>>>>>> Stashed changes
=======
      `Welcome ${res.profileObj.name}`
>>>>>>> 1a0cc88bfa58e31391c88edf40d7d9d56e5fa44d
    );
    refreshTokenSetup(res);
    props.setLoggedIn(true);
    props.setGoogleObj(res.profileObj);
    addUser({profileObj: res.profileObj})
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };

  
  return (

    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;

