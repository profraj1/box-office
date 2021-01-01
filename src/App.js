import React from "react";
import {Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import Show from "./pages/Show";
import Starred from "./pages/Starred"


function App() {
  return (
      
      <Switch>
        
        <Route exact path = "/">
          <Home />
        </Route>

        <Route exact path = "/starred">
          <Starred />
        </Route>

        <Route exact path = "/show/:showId">
          <Show />
        </Route>

        <Route>
          Error 404 page not found.
        </Route>

      </Switch>
  );
}

export default App;
