import {
	Box,
	Button,
	Container,
	CssBaseline,
	Grid,
	TextField,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router";
import { useState } from "react";

const EditData = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const navigate = useNavigate();

	let { id } = useParams();

	const location = useLocation();
	const data = location.state.data;
	console.log(data);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = new FormData(e.currentTarget);
		let dataForm = {
			name: data.get("name"),
			avatar: data.get("avatar"),
			email: data.get("email"),
			zip: data.get("zip"),
		};

		setIsSubmitting(true);

		try {
			let res = await axios.put(
				`https://6506a0c63a38daf4803e8937.mockapi.io/project1/${id}`,
				dataForm
			);
			console.log(dataForm);
			e.target.reset();
			console.log(res.data);
		} catch (err) {
			console.log(`Error: ${err.message}`);
		}

		setIsSubmitting(true);
		navigate("/");
	};

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
								fullWidth
								id="fullName"
								label="Full Name"
								name="name"
								autoFocus
								required
								type="name"
							/>
						</Grid>
						<Grid
							item
							xs={12}>
							<TextField
								defaultValue={data.zip}
								fullWidth
								id="number"
								label="Zip Code"
								name="zip"
								required
								type="number"
							/>
						</Grid>
						<Grid
							item
							xs={12}>
							<TextField
								defaultValue={data.email}
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								required
								type="email"
							/>
						</Grid>
						<Grid
							item
							xs={12}>
							<TextField
								defaultValue={data.avatar}
								fullWidth
								id="image"
								label="Image Link"
								name="avatar"
								required
								type="text"
							/>
						</Grid>
					</Grid>
					<Button
						disabled={isSubmitting}
						startIcon={<SaveIcon />}
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}>
						Save Changes
					</Button>
				</Box>
			</Box>
		</Container>
	);
};

export default EditData;
