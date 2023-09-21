import "./App.css";
import { Route, Routes } from "react-router";
import AddData from "./components/AddData";
import Nav from "./components/Nav";
import Tables from "./components/Tables";
import Cards from "./components/Cards";

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
					element={<AddData />}
				/>
				<Route
					path="/users/:userId"
					element={<Cards />}
				/>
			</Routes>
		</div>
	);
};

export default App;
