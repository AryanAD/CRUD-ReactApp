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
import { useNavigate } from "react-router";
import AddIcon from "@mui/icons-material/Add";

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
	const [isSubmitting, setIsSubmitting] = useState(false);
	const initialErrors = {
		name: "",
		zip: "",
		email: "",
		image: "",
	};

	const [formErrors, setFormErrors] = useState(initialErrors);

	const [formData, setFormData] = useState({
		name: "",
		zip: "",
		email: "",
		image: "",
	});

	const navigate = useNavigate();

	const validateForm = () => {
		const errors = {};

		if (!formData.name) {
			errors.name = "Full Name is required";
		} else if (!/^([a-zA-Z]+\s[a-zA-Z]+.*)$/.test(formData.name)) {
			errors.name =
				"Full Name must have at least 5 letters separated by a space";
		}

		if (!formData.zip) {
			errors.zip = "Zip Code is required";
		} else if (!/^\d{5}$/.test(formData.zip)) {
			errors.zip = "Zip Code must be 5 digits";
		}

		if (!formData.email) {
			errors.email = "Email is required";
		} else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
			errors.email = "Invalid email address";
		}

		if (!formData.image) {
			errors.image = "Image Link is required";
		} else if (!/^(https?:\/\/.*)$/.test(formData.image)) {
			errors.image = "Image Link must start with 'http://' or 'https://'";
		}

		setFormErrors(errors);

		return Object.keys(errors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		const isFormValid = validateForm();

		if (isFormValid) {
			try {
				let res = await axios.post(
					`https://6506a0c63a38daf4803e8937.mockapi.io/project1/`,
					formData
				);
				e.target.reset();
				console.log(res.data);
				setFormErrors(initialErrors);
			} catch (err) {
				console.log(`Error: ${err.message}`);
			}

			setIsSubmitting(false);
			navigate("/");
		} else {
			setIsSubmitting(false);
		}
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
								name="name"
								fullWidth
								id="fullName"
								label="Full Name"
								autoFocus
								type="text"
								onChange={(e) =>
									setFormData({ ...formData, name: e.target.value })
								}
							/>
							<div style={{ color: "red", fontSize: "14px" }}>
								{formErrors.name}
							</div>
						</Grid>
						<Grid
							item
							xs={12}>
							<TextField
								fullWidth
								name="number"
								label="Zip Code"
								id="number"
								type="number"
								onChange={(e) =>
									setFormData({ ...formData, zip: e.target.value })
								}
							/>
							<div style={{ color: "red", fontSize: "14px" }}>
								{formErrors.zip}
							</div>
						</Grid>
						<Grid
							item
							xs={12}>
							<TextField
								fullWidth
								type="email"
								id="email"
								label="Email Address"
								name="email"
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
							/>
							<div style={{ color: "red", fontSize: "14px" }}>
								{formErrors.email}
							</div>
						</Grid>
						<Grid
							item
							xs={12}>
							<TextField
								fullWidth
								type="text"
								id="image"
								label="Image Link"
								name="image"
								onChange={(e) =>
									setFormData({ ...formData, image: e.target.value })
								}
							/>
							<div style={{ color: "red", fontSize: "14px" }}>
								{formErrors.image}
							</div>
						</Grid>
					</Grid>
					<Button
						disabled={isSubmitting}
						startIcon={<AddIcon />}
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
