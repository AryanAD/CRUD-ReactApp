import Display from "./Display";
import Form from "./Form";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";

function App() {
	const home = () => {
		return (
			<BrowserRouter>
				<Routes>
					<Route path="/read/:idgenshin" element={<Home />}></Route>
				</Routes>
			</BrowserRouter>
		);
	};
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/create" element={<Form />}></Route>
				<Route path="/edit/:id" element={<Form />}></Route>
			</Routes>

			<Routes>
				<Route path="/read/:id" element={<Display />}></Route>
			</Routes>
			<button onClick={home}>Home</button>
		</BrowserRouter>
	);
}

export default App;
