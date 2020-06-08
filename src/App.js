import React, { useState, useEffect } from 'react';
import { useRoutes, A } from "hookrouter";
import routes from "./router";
import NoPageFound from "./components/NoPageFound";
import './App.css';
import Header from './components/Header.jsx';
import Card from './components/Card';

function App() {

  function refreshPage() {
    window.location.reload(false);
  }

  const routeResult = useRoutes(routes);

  return (
    <div>
      <Header />
      <div className="tabs">
        <ul>
          <li> <A href="/gen1" onClick={refreshPage}>Generation 1</A> <br /></li>
          <li> <A href="/gen2" onClick={refreshPage}>Generation 2</A> <br /></li>
          <li> <A href="/gen3" onClick={refreshPage}>Generation 3</A> <br /></li>
          <li> <A href="/gen4" onClick={refreshPage}>Generation 4</A> <br /></li>
          {routeResult || <NoPageFound />}
        </ul>
      </div>
    </div>
  );
}

export default App;
