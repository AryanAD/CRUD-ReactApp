import "./App.css";
import { Route, Routes } from "react-router";
import AddData from "./components/AddData";
import Nav from "./components/Nav";
import Tables from "./components/Tables";
import EditData from "./components/EditData";
import SingleData from "./components/SingleData";

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
					path="/edit/:id"
					element={<EditData />}
				/>
				<Route
					path="/cards/:id"
					element={<SingleData />}
				/>
			</Routes>
		</div>
	);
};

export default App;
