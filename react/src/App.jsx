import "./App.css";
import { useState } from "react";
import Tables from "./components/Tables";
import Nav from "./components/Nav";

const App = () => {
	return (
		<div className="App">
			<Nav />
			<Tables />
		</div>
	);
};

export default App;
