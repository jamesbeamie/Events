import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import Navbar from "./commonComponents/Navbar";

function App() {
  return (
    <div>
      <Switch>
        <Route path='/home' component={LandingPage} />
        <Route path='/navbar' component={Navbar} />
      </Switch>
    </div>
  );
}

export default App;
