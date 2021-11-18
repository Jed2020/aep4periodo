import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Main from "./pages/main";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";




function Routes() {  
  return (
    <Router>
     <Switch>     
      <Route component={Main} exact path="/">
      </Route>
      <Route component={Page2} exact path="/calc">
      </Route>
      <Route component={Page3} exact path="/table">
      </Route>
      </Switch>      
    </Router>
  );
}

export default Routes;