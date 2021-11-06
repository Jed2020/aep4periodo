import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Main from "./pages/main";
import Calc from "./pages/calc";


function Routes() {  
  return (
    <Router>
      <Switch>
      <Route component={Main} exact path="/">
      </Route>
      <Route component={Calc} exact path="/calc">
      </Route>
      </Switch>      
    </Router>
  );
}

export default Routes;