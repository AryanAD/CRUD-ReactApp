import Display from "./Display";
import Form from "./Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/create" element={<Form />}></Route>
				<Route path="/edit/:id" element={<Form />}></Route>
				<Route path="/read/:id" element={<Display />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
