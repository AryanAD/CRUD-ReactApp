import {
	Box,
	Button,
	Container,
	CssBaseline,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";

function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}>
			{"Copyright © "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}
const AddData = () => {
	const [formData, setFormData] = useState({
		name: "",
		zip: "",
		email: "",
		image: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			let res = await axios.post(
				`https://6506a0c63a38daf4803e8937.mockapi.io/project1/`,
				formData
			);
			e.target.reset();
			console.log(res.data);
		} catch (err) {
			console.log(`Error: ${err.message}`);
		}
	};

	console.log(formData);
	return (
		<Container
			component="main"
			maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}>
				<Box
					component="form"
					onSubmit={handleSubmit}
					sx={{ mt: 3 }}>
					<Grid
						container
						spacing={2}>
						<Grid
							item
							xs={12}>
							<TextField
								name="fullName"
								required
								fullWidth
								id="fullName"
								label="Full Name"
								autoFocus
								type="name"
								onChange={(e) =>
									setFormData({ ...formData, name: e.target.value })
								}
							/>
						</Grid>
						<Grid
							item
							xs={12}>
							<TextField
								required
								fullWidth
								name="number"
								label="Phone Number"
								id="number"
								type="number"
								onChange={(e) =>
									setFormData({ ...formData, zip: e.target.value })
								}
							/>
						</Grid>
						<Grid
							item
							xs={12}>
							<TextField
								required
								fullWidth
								type="email"
								id="email"
								label="Email Address"
								name="email"
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
							/>
						</Grid>
						<Grid
							item
							xs={12}>
							<TextField
								required
								fullWidth
								type="text"
								id="image"
								label="Image Link"
								name="image"
								onChange={(e) =>
									setFormData({ ...formData, image: e.target.value })
								}
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}>
						Add Data
					</Button>
				</Box>
			</Box>
			<Copyright sx={{ mt: 5 }} />
		</Container>
	);
};

export default AddData;
