import "./App.css";
import { Route, Routes } from "react-router";
import AddData from "./components/AddData";
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
					element={<AddData />}
				/>
			</Routes>
		</div>
	);
};

export default App;
