import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Organization from './pages/Organization';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path={["/", "/home"]}>
        <Home />
      </Route>
      <Route exact path={["/organization"]}>
        <Organization />
      </Route>
    </Switch>
    </>
  );
}

export default App;
