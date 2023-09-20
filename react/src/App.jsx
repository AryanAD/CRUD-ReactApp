import "./App.css";
import Model from "./components/Model";
import { useState } from "react";
import Button from "@mui/material/Button";
import Tables from "./components/Tables";
import Nav from "./components/Nav";
import Cards from "./components/Cards";

const App = () => {
	const [modelOpen, setModelOpen] = useState(false);

	return (
		<div className="App">
			<Nav />
			{/* <Cards /> */}
			<Tables />
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
