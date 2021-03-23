import React, { useState } from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '998417810145-24a0001s9pne9f2cuuf4fb9lrkqrjlje.apps.googleusercontent.com' //insert client id here

function Logout(props) {

  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
    props.setLoggedIn(false);
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;