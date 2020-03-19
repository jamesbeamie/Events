import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import Navbar from "./commonComponents/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/home' component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
