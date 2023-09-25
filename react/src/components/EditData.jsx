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
import { useState, useEffect } from "react"; // Import useEffect

const EditData = () => {
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

	const [isSubmitting, setIsSubmitting] = useState(false);

	const navigate = useNavigate();
	let { id } = useParams();

	const location = useLocation();
	const data = location.state.data;

	// Use useEffect to set the initial formData with existing data
	useEffect(() => {
		if (data) {
			setFormData({
				name: data.name || "",
				zip: data.zip || "",
				email: data.email || "",
				image: data.image || "",
			});
		}
	}, [data]);

	const validateForm = () => {
		const errors = {};

		if (!formData.name) {
			errors.name = "Full Name is required";
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
				let res = await axios.put(
					`https://6506a0c63a38daf4803e8937.mockapi.io/project1/${id}`,
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
								value={formData.name}
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
								name="zip"
								label="Zip Code"
								id="zip"
								type="text"
								onChange={(e) =>
									setFormData({ ...formData, zip: e.target.value })
								}
								value={formData.zip}
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
								value={formData.email}
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
								value={formData.image}
							/>
							<div style={{ color: "red", fontSize: "14px" }}>
								{formErrors.image}
							</div>
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
