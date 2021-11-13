import React from 'react';
import Register from '../components/register/register';
import Login from '../components/login/login';
import AppAppBar from '../components/header/header';
import Body from '../components/body/body';

function Main() {  
  return (
  <>
    <AppAppBar/>
    <Body/>
    <Register/>
    <Login/>
  </>  
  );
}

export default Main;