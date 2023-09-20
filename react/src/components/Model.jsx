import { Button, TextField } from "@mui/material";
import "./Model.css";

const Model = ({ closeModel }) => {
	return (
		<div
			className="model-container"
			onClick={(e) => {
				if (e.target.className === "model-container") closeModel();
			}}>
			<div className="model">
				<form>
					<div className="form-group">
						<TextField
							type="text"
							name="Name"
							id="outlined-basic"
							color="success"
							label="Full Name"
							variant="outlined"
							required
						/>
					</div>
					<div className="form-group">
						<TextField
							type="number"
							name="Contact"
							id="outlined-basic"
							color="success"
							label="Contact Number"
							variant="outlined"
							required
						/>
					</div>
					<div className="form-group">
						<TextField
							type="email"
							name="email"
							id="outlined-basic"
							color="success"
							label="Email Address"
							variant="outlined"
							required
						/>
					</div>
					<Button
						size="medium"
						variant="contained"
						type="submit"
						color="success">
						Submit
					</Button>
					{/* <button
						type="submit"
						className="btn">
						Submit
					</button> */}
				</form>
			</div>
		</div>
	);
};

export default Model;
