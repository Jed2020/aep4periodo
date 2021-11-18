import React from 'react';
import Calc from '../components/calc/calc';
import "../components/form.css";
import AppAppBar from '../components/header/headerCalc';
import BodyCalc from '../components/body/bodyCalc';

function Page2() {  
  return (
  <>
    <AppAppBar/>
    <BodyCalc/>
    <Calc/>
  </>  
  );
}

export default Page2;