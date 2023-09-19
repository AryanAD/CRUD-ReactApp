import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";

function App() {
	return (
		<>
			<Link to="/">HOME</Link>
			<Link to="/add"> ADD DATA</Link>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/add" element={<Add />} />
			</Routes>
		</>
	);
}

export default App;
