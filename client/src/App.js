import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard";
import Home from './pages/Home';
import CharitySearch from './pages/CharitySearch';
import Donate from'./pages/Donate';
<<<<<<< HEAD
import Organization from "./pages/Organization";
=======
import Navbar from './components/Navbar';
>>>>>>> f3eb4028872901cb1932d1f5af70b046fb5a201a

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
      <Route exact path={["/organization/:ein"]}>
        <Organization />
      </Route>
    </Switch>
    </>
  )
}

export default App;
