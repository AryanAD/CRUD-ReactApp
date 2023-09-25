import React, { useEffect, useState } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import {
	Avatar,
	TablePagination,
	TableRow,
	TableHead,
	TableContainer,
	TableCell,
	TableBody,
	Table,
	Paper,
	CircularProgress,
} from "@mui/material";

const Tables = () => {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

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
							{myData.length === 0 ? (
								<TableRow>
									<TableCell
										colSpan={5}
										sx={{
											width: "100%",
											height: "70vh",
											display: "flex",
											ml: 50,
											alignItems: "center",
											justifyContent: "center",
										}}>
										<CircularProgress
											color={"success"}
											size={100}
										/>
									</TableCell>
								</TableRow>
							) : (
								myData
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((data) => {
										const { id, avatar, name, zip, email } = data;
										return (
											<TableRow key={id}>
												<TableCell sx={{ fontSize: "17px" }}>{id}</TableCell>
												{/* <Link
													style={{ textDecoration: "none" }}
													to={`/cards/${id}`}> */}
												<TableCell
													onClick={() => {
														navigate(`/cards/${id}`, {
															state: { data: data },
														});
													}}
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
												{/* </Link> */}
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
													/>
													<DeleteIcon
														sx={{ color: "chocolate", cursor: "pointer" }}
														onClick={() => deleteMyData(id)}
													/>
												</TableCell>
											</TableRow>
										);
									})
							)}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[10, 25, 50]}
					component="div"
					count={myData.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
		</>
	);
};

export default Tables;
