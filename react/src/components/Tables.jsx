import { useEffect, useState } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";

const Tables = () => {
	const navigate = useNavigate();
	const [myData, setMyData] = useState([]);

	const fetchMyData = async () => {
		try {
			let response = await axios.get(
				`https://6506a0c63a38daf4803e8937.mockapi.io/project1/`
			);
			setMyData(response.data);
		} catch (err) {
			console.log(`Error: ${err.message}`);
		}
	};
	useEffect(() => {
		fetchMyData();
	}, []);

	const deleteMyData = async (id) => {
		try {
			console.log("Deleted Data Number: " + id);
			let res = await axios.delete(
				`https://6506a0c63a38daf4803e8937.mockapi.io/project1/${id}`
			);
			fetchMyData();
			console.log(res);
		} catch (err) {
			console.log(`Error: ${err.message}`);
		}
	};

	return (
		<>
			<Paper sx={{ width: "80%" }}>
				<TableContainer sx={{ borderRadius: "7px 7px 4px 4px " }}>
					<Table
						stickyHeader
						aria-label="sticky table">
						<TableHead>
							<TableRow>
								<TableCell
									sx={{
										bgcolor: "#17c217",
										fontSize: "18px",
										fontWeight: "bold",
									}}>
									SN
								</TableCell>
								<TableCell
									sx={{
										bgcolor: "#17c217",
										fontSize: "18px",
										fontWeight: "bold",
									}}>
									NAME
								</TableCell>
								<TableCell
									sx={{
										bgcolor: "#17c217",
										fontSize: "18px",
										fontWeight: "bold",
									}}>
									ZIP CODE
								</TableCell>
								<TableCell
									sx={{
										bgcolor: "#17c217",
										fontSize: "18px",
										fontWeight: "bold",
									}}>
									EMAIL
								</TableCell>
								<TableCell
									sx={{
										bgcolor: "#17c217",
										fontSize: "18px",
										fontWeight: "bold",
										textAlign: "center",
									}}>
									ACTION
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{myData.map((data, i) => {
								const { id, avatar, name, zip, email } = data;
								return (
									<TableRow key={id}>
										<TableCell sx={{ fontSize: "17px" }}>{i + 1}</TableCell>
										<TableCell
											sx={{
												fontSize: "17px",
												display: "flex",
												alignItems: "center",
												gap: "15px",
											}}>
											<Avatar
												alt={name}
												src={avatar}
											/>
											{name}
										</TableCell>
										<TableCell sx={{ fontSize: "17px" }}>{zip}</TableCell>
										<TableCell sx={{ fontSize: "17px" }}>{email}</TableCell>
										<TableCell
											sx={{
												display: "flex",
												justifyContent: "space-around",
												fontSize: "17px",
											}}>
											<EditIcon
												onClick={() => {
													navigate(`/edit/${id}`, {
														state: { data: data },
													});
												}}
												sx={{ cursor: "pointer", color: "green" }}
												className="edit-btn"
											/>
											<DeleteIcon
												sx={{ color: "chocolate", cursor: "pointer" }}
												className="delete-btn"
												onClick={() => deleteMyData(id)}
											/>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</>
	);
};

export default Tables;
