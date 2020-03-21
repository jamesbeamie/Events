import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import Navbar from "./commonComponents/Navbar";
import LoginPage from "./SignIn";
import CreateEvent from "./CreateEvent";
import EventList from "./EventListComponents";

function App() {
  return (
    <div>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/navbar' component={Navbar} />
          <Route path='/login' component={LoginPage} />
          <Route path='/create-event' component={CreateEvent} />
          <Route path='/events' component={EventList} />
        </Switch>
      </React.Fragment>
    </div>
  );
}

export default App;
