import {
	Box,
	Button,
	Container,
	CssBaseline,
	Grid,
	TextField,
	Typography,
} from "@mui/material";

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

const Add = () => {
	const handleSubmit = (event) => {};

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

export default Add;
