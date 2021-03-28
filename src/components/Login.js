import React, { useState } from 'react'

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';
import addUser from '../utils/firestore.js'


const clientId = '998417810145-24a0001s9pne9f2cuuf4fb9lrkqrjlje.apps.googleusercontent.com'

function Login(props) {

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Welcome ${res.profileObj.name}`
    );
    refreshTokenSetup(res);
    props.setLoggedIn(true);
    props.setGoogleObj(res.profileObj);
    addUser({profileObj: res.profileObj})
    // MY_ID = res.profileObj.googleId
    // console.log({MY_ID})
    window.MY_ID = res.profileObj.googleId
    console.log(window.MY_ID)
    // set({id: res.profileObj.googleId});
    // get();
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

export default Login

