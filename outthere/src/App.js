import React from "react"
import Header from "./Header";
import ProfCards from "./ProfCards";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SwipeButton from "./SwipeButton";
import Chat from "./Chat";
import DMS from "./DMS";

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

        <Route path="/chat/:person">
        <Header backButton= "/chat" />
            <DMS />
          </Route>

          <Route path="/chat">
        <Header backButton= "/" />
            <Chat />
          </Route>
        

          <Route path="/">
        <Header />
            <ProfCards />
            <SwipeButton />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


/*user profile*/
/*navigation*/
/*all messages*/
/*direct messages*/