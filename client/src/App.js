import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Home from "./pages/Home";
import CharitySearch from "./pages/CharitySearch";
import Navbar from "./components/Navbar";
import Organization from "./pages/Organization";
import Profile from "./pages/Profile";
import SearchDetails from "./pages/SearchDetails";
function App() {
  const [currentUser, setCurrentUser] = useState({
    isSignedIn: false,
    passwordUpdated: false,
  });
  function handleUserLogin(userDetails) {
    console.log("Logged in successfully", userDetails.firstName);
    setCurrentUser({ ...userDetails, isSignedIn: true });
  }
  function handleSignOut(userDetails) {
    console.log("Logging out user");
    setCurrentUser({ ...userDetails, isSignedIn: false });
  }
  function handleInputChange(event) {
    const { value, name } = event.target;
    if (name === "password") currentUser.passwordUpdated = true;
    setCurrentUser({ ...currentUser, [name]: value });
  }
  if (!currentUser.isSignedIn) {
    return (
      <>
        <Navbar
          handleUserLogin={handleUserLogin}
          isSignedIn={currentUser.isSignedIn}
        />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home isSignedIn={currentUser.isSignedIn} />
          </Route>
          <Route exact path={["/search-details/:ein"]}>
            <SearchDetails isSignedIn={false} />
          </Route>
        </Switch>
      </>
    );
  }
  return (
    <>
      <Dashboard
        handleSignOut={handleSignOut}
        isSignedIn={currentUser.isSignedIn}
        currentUser={currentUser}
      />
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home isSignedIn={currentUser.isSignedIn} />
        </Route>
        <Route exact path={["/search"]}>
          <CharitySearch />
        </Route>
        <Route exact path={["/profile"]}>
          <Profile
            currentUser={currentUser}
            handleInputChange={handleInputChange}
          />
        </Route>
        <Route exact path={["/organization/:ein"]}>
          <Organization />
        </Route>
        <Route exact path={["/search-details/:ein"]}>
          <SearchDetails isSignedIn={currentUser.isSignedIn || false} />
        </Route>
      </Switch>
    </>
  );
}
export default App;
