import Typography from "@mui/material/Typography";
import { Avatar, Box, CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function SingleData() {
	const [myData, setMyData] = useState();
	let { id } = useParams();

	const fetchMyData = async (id) => {
		try {
			let res = await axios.get(
				`https://6506a0c63a38daf4803e8937.mockapi.io/project1/${id}`
			);
			setMyData(res.data);
		} catch (err) {
			console.log(`Error: ${err.message}`);
		}
	};
	useEffect(() => {
		fetchMyData(id);
	}, [id]);

	return (
		<>
			{!myData ? (
				<CircularProgress
					size={80}
					sx={{
						position: "absolute",
						top: "20%",
						left: "50%",
						transform: "translate(-50%, -50%)",
					}}
				/>
			) : (
				<Box
					sx={{
						width: "100%",
						height: "89vh",
						display: "flex",
						alignItems: "center",
						flexFlow: "column",
					}}>
					<Avatar
						sx={{ width: "320px", height: "320px" }}
						src={myData.image}
						alt={myData.name}
					/>
					<Box>
						<Typography
							align="center"
							gutterBottom
							variant="h2"
							component="div">
							{myData.name}
						</Typography>
						<Typography
							align="center"
							variant="h5"
							color="text.secondary">
							Email: {myData.email}
							<br />
							Zip Code: {myData.zip}
						</Typography>
					</Box>
				</Box>
			)}
		</>
	);
}
