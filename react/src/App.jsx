import Table from "./components/Table";
import "./App.css";
import Model from "./components/Model";
import { useState } from "react";

const App = () => {
	const [modelOpen, setModelOpen] = useState(false);

	return (
		<div className="App">
			<Table />
			<button
				className="btn"
				onClick={() => setModelOpen(true)}>
				Add
			</button>
			{modelOpen && (
				<Model
					closeModel={() => {
						setModelOpen(false);
					}}
				/>
			)}
		</div>
	);
};

export default App;
