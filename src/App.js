import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import HomePage from './pages/home/HomePage';
import Login from './pages/auth/Login';
function App() {
  return (
    <Router>
      <div>
        <Switch>
             <Public>
               <Route exact path="/" component={HomePage}/>
               <Route path="/login" component={Login}/>
             </Public >
             <Main>
               <Route path="/dash" component={Dashboard}/>
             </Main>
        </Switch>
        
      </div>
    </Router>
  );
}

function Dashboard() {

}

export default App;
