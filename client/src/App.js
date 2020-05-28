import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard";
import Home from './pages/Home';
import CharitySearch from './pages/CharitySearch';
import Donate from'./pages/Donate';

function App() {
  return (
    <>
    <Dashboard />
    <Switch>
      <Route exact path={["/", "/home"]}>
        <Home />
      </Route>
      <Route exact path={["/search"]}>
        <CharitySearch />
      </Route>
			<Route exact path={["/donate"]}>
        <Donate />
      </Route>
    </Switch>
    </>
  );
}

export default App;
