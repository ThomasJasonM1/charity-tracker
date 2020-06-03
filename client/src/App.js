import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard";
import Home from './pages/Home';
import CharitySearch from './pages/CharitySearch';
import Donate from'./pages/Donate';
import Navbar from './components/Navbar';

function App() {

  const [currentUser, setCurrentUser] = useState({ isSignedIn: false });

  function handleUserLogin(userDetails) {
    console.log("Logged in successfully", userDetails);
    setCurrentUser({ ...userDetails, isSignedIn: true });
  }

  if (!currentUser.isSignedIn) {
    return ( 
      <>
      <Navbar handleUserLogin={handleUserLogin}/>
      <Home />
      </>
    )
  }
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
  )
}

export default App;
