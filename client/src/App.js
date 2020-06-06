import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard";
import Home from './pages/Home';
import CharitySearch from './pages/CharitySearch';
import Navbar from './components/Navbar';
import Organization from "./pages/Organization";
import Profile from "./pages/Profile";


function App() {

  const [currentUser, setCurrentUser] = useState({ isSignedIn: false });

  function handleUserLogin(userDetails) {
    console.log("Logged in successfully", userDetails);
    setCurrentUser({ ...userDetails, isSignedIn: true });
  }

  function handleSignOut(userDetails) {
    console.log("Logging out user");
    setCurrentUser({ ...userDetails, isSignedIn: false });
  }

  if (!currentUser.isSignedIn) {
    return ( 
      <>
      <Navbar 
        handleUserLogin={handleUserLogin}
        isSignedIn={currentUser.isSignedIn}
        />
      <Home isSignedIn={currentUser.isSignedIn}/>
      </>
    )
  }
  return (
    <>
    <Dashboard 
      handleSignOut={handleSignOut}
      isSignedIn={currentUser.isSignedIn}
      />
    <Switch>
      <Route exact path={["/", "/home"]}>
        <Home isSignedIn={currentUser.isSignedIn}/>
      </Route>
      <Route exact path={["/search"]}>
        <CharitySearch />
      </Route>
			<Route exact path={["/profile"]}>
        <Profile />
      </Route>
      <Route exact path={["/organization/:ein"]}>
        <Organization />
      </Route>
    </Switch>
    </>
  )
}

export default App;
