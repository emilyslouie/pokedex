import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NoPageFound from "./components/NoPageFound";
import './App.css';
import Gen from "./components/Gen";
import Header from './components/Header.jsx';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Header />
      <Router>
        <div className="tabs">
          <ul>
            <li> <Link to="/gen1">Generation 1</Link></li>
            <li> <Link to="/gen2">Generation 2</Link></li>
            <li> <Link to="/gen3">Generation 3</Link></li>
            <li> <Link to="/gen4">Generation 4</Link></li>
            <li> <Link to="/gen5">Generation 5</Link></li>
            <li> <Link to="/gen6">Generation 6</Link></li>
            <li> <Link to="/gen7">Generation 7</Link></li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/">
            <Gen generation={1} />
          </Route>
          <Route path="/gen1">
            <Gen generation={1} />
          </Route>
          <Route path="/gen2">
            <Gen generation={2} />
          </Route>
          <Route path="/gen3">
            <Gen generation={3} />
          </Route>
          <Route path="/gen4">
            <Gen generation={4} />
          </Route>
          <Route path="/gen5">
            <Gen generation={5} />
          </Route>
          <Route path="/gen6">
            <Gen generation={6} />
          </Route>
          <Route path="/gen7">
            <Gen generation={7} />
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
