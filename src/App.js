import React from 'react';
import { useRoutes, A } from "hookrouter";
import routes from "./router";
import NoPageFound from "./components/NoPageFound";
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer'


function App() {

  const routeResult = useRoutes(routes);

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <Header />
      <div className="tabs">
        <ul>
          <li> <A href="/gen1" onClick={refreshPage}>Generation 1</A></li>
          <li> <A href="/gen2" onClick={refreshPage}>Generation 2</A></li>
          <li> <A href="/gen3" onClick={refreshPage}>Generation 3</A></li>
          <li> <A href="/gen4" onClick={refreshPage}>Generation 4</A></li>
          <li> <A href="/gen5" onClick={refreshPage}>Generation 5</A></li>
          {routeResult || <NoPageFound />}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
