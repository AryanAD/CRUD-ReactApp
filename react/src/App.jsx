import "./App.css";
import { Route, Routes } from "react-router";
import Add from "./components/Add";
import Nav from "./components/Nav";
import Tables from "./components/Tables";

const App = () => {
	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route
					path="/"
					element={<Tables />}
				/>
				<Route
					path="/add"
					element={<Add />}
				/>
			</Routes>
		</div>
	);
};

export default App;
