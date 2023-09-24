import {
	Box,
	Button,
	Container,
	CssBaseline,
	Grid,
	TextField,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

const EditData = () => {
	const navigate = useNavigate();

	let { id } = useParams();

	const location = useLocation();
	const data = location.state.data;
	console.log(data);

	const [formData, setFormData] = useState({
		name: "",
		zip: "",
		email: "",
		image: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			let res = await axios.put(
				`https://6506a0c63a38daf4803e8937.mockapi.io/project1/${id}`,
				formData
			);
			e.target.reset();
			console.log(res.data);
		} catch (err) {
			console.log(`Error: ${err.message}`);
		}
		navigate("/");
		fetchMyData();
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
								defaultValue={data.name}
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
								defaultValue={data.zip}
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
								defaultValue={data.email}
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
								defaultValue={data.avatar}
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
		</Container>
	);
};

export default EditData;
