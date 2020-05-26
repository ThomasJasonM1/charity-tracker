import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Organization from "./pages/Organization";
import CharitySearch from "./pages/CharitySearch";

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
				<Route path={["/search"]}>
					<CharitySearch />
				</Route>
			</Switch>
		</>
	);
}

export default App;
