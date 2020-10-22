import React from 'react';
import Game from './Game'
import Login from './Login'
import Home from './Home'
import News from './News'
import Header from './Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <Switch>
    <Route path="/game">
      <Header/>
      <Game />
    </Route>
    <Route path="/news">
    <Header/>
      <News />
    </Route>
    <Route path="/login">
    <Header/>
      <Login />
    </Route>
    <Route path="/">
    <Header/>
      <Home />
    </Route>
  </Switch>
</Router>

  );
}

export default App;
