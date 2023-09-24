import "./App.css";
import { Route, Routes } from "react-router";
import AddData from "./components/AddData";
import Nav from "./components/Nav";
import Tables from "./components/Tables";
import Cards from "./components/SingleData";
import EditData from "./components/EditData";

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
					path="/users/:id"
					element={<Cards />}
				/>
				<Route
					path="/edit/:id"
					element={<EditData />}
				/>
			</Routes>
		</div>
	);
};

export default App;
