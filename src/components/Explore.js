import React from 'react';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Gen from "./Gen";
import "../css/Home.css"
import piplup from "../piplup.png"

export default function Explore() {
  let { path, url } = useRouteMatch();
  return (<>
    <h2>Select a generation to explore:</h2>
    <div className="tabs">
      <ul>
        <li> <Link to={`${url}/all`}>All</Link></li>
        <li> <Link to={`${url}/gen1`}>Generation 1</Link></li>
        <li> <Link to={`${url}/gen2`}>Generation 2</Link></li>
        <li> <Link to={`${url}/gen3`}>Generation 3</Link></li>
        <li> <Link to={`${url}/gen4`}>Generation 4</Link></li>
        <li> <Link to={`${url}/gen5`}>Generation 5</Link></li>
        <li> <Link to={`${url}/gen6`}>Generation 6</Link></li>
        <li> <Link to={`${url}/gen7`}>Generation 7</Link></li>
      </ul>
    </div>
    <Switch>
      <Route exact path={path}>
        <div className="piplup">
          <img src={piplup} alt="" />
        </div>
      </Route>
      <Route path={`${path}/all`}>
        <Gen generation={0} />
      </Route>
      <Route path={`${path}/gen1`}>
        <Gen generation={1} />
      </Route>
      <Route path={`${path}/gen2`}>
        <Gen generation={2} />
      </Route>
      <Route path={`${path}/gen3`}>
        <Gen generation={3} />
      </Route>
      <Route path={`${path}/gen4`}>
        <Gen generation={4} />
      </Route>
      <Route path={`${path}/gen5`}>
        <Gen generation={5} />
      </Route>
      <Route path={`${path}/gen6`}>
        <Gen generation={6} />
      </Route>
      <Route path={`${path}/gen7`}>
        <Gen generation={7} />
      </Route>

    </Switch>
  </>);
}
