import Table from "./components/Table";
import "./App.css";
import Model from "./components/Model";
import { useState } from "react";
import Button from "@mui/material/Button";

const App = () => {
	const [modelOpen, setModelOpen] = useState(false);

	return (
		<div className="App">
			<Table />
			<Button
				size="medium"
				variant="contained"
				sx={{ color: "azure", bgcolor: "green" }}
				onClick={() => setModelOpen(true)}>
				Add
			</Button>

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
