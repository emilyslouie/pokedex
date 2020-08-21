import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import pokemon from "./pokemon.png";
import "./css/Header.css"
import Home from "./components/Home"
import Search from "./components/Search"
import NoPageFound from "./components/NoPageFound";
import Explore from './components/Explore.js';

function App() {
  return (
    <div>
      <Router>
        <nav className="Header">
          <span className="nav">
            <img className="logo" src={pokemon} alt="" />
            <Link to="/"><h1><span className="smol">Pokédex</span></h1> </Link>
            <Link to="/explore"><h3 className="navers">Explore</h3></Link>
            <Link to="/search"><h3 className="navers">Search</h3> </Link>
          </span>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="*">
              <NoPageFound />
            </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
