import React from 'react';
import Calc from '../components/calc/calc';
import "../components/form.css";
import AppAppBar from '../components/header/headerCalc';

function Main() {  
  return (
  <>
    <AppAppBar/>
    <Calc/>
  </>  
  );
}

export default Main;