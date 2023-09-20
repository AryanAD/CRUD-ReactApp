import { useEffect, useState } from "react";
import "./Table.css";
import axios from "axios";
// import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Tables = () => {
	const [myData, setMyData] = useState([]);

	const fetchMyData = async () => {
		try {
			let response = await axios.get(
				`https://6506a0c63a38daf4803e8937.mockapi.io/project1/`
			);
			setMyData(response.data);

			// const dataList = myData.filter((post) => post.id !== id);
			// setMyData(dataList);
		} catch (err) {
			console.log(`Error: ${err.message}`);
		}
	};
	useEffect(() => {
		fetchMyData();
	}, []);

	const deleteMyData = async (id) => {
		try {
			console.log(id);
			let res = await axios.delete(
				`https://6506a0c63a38daf4803e8937.mockapi.io/project1/${id}`
			);
			fetchMyData();
			console.log(res);
			// const dataList = myData.filter((post) => post.id !== id);
			// setMyData(dataList);
		} catch (err) {
			console.log(`Error: ${err.message}`);
		}
	};

	return (
		<>
			<Paper sx={{ width: "80%" }}>
				<TableContainer sx={{}}>
					<Table
						stickyHeader
						aria-label="sticky table">
						<TableHead>
							<TableRow>
								{/* {columns.map((column) => (
									<TableCell
										key={column.id}
										align={column.align}
										style={{ minWidth: column.minWidth }}>
										{column.label}
									</TableCell>
								))} */}
								<TableCell>ID</TableCell>
								<TableCell>NAME</TableCell>
								<TableCell>CONTACT</TableCell>
								<TableCell>EMAIL</TableCell>
								<TableCell>ACTION</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{myData.map((data) => {
								const { id, name, contact, email } = data;
								return (
									<TableRow key={id}>
										<TableCell>{id}</TableCell>
										<TableCell>{name}</TableCell>
										<TableCell>{contact}</TableCell>
										<TableCell>{email}</TableCell>
										<TableCell>
											<span className="action">
												<EditIcon
													color="success"
													className="edit-btn"
													sx={{ cursor: "pointer" }}
												/>
												<DeleteIcon
													sx={{ color: "chocolate", cursor: "pointer" }}
													className="delete-btn"
													onClick={() => deleteMyData(id)}
												/>
											</span>
										</TableCell>
									</TableRow>
								);
							})}
							{/* {rows
							 	.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							 	.map((row) => {
							 		return (
							 			<TableRow
							 				hover
							 				role="checkbox"
							 				tabIndex={-1}
							 				key={row.code}>
							 				{columns.map((column) => {
							 					const value = row[column.id];
							 					return (
							 						<TableCell
							 							key={column.id}
							 							align={column.align}>
							 							{column.format && typeof value === "number"
							 								? column.format(value)
							 								: value}
							 						</TableCell>
							 					);
							 				})}
							 			</TableRow>
							 		);
							 	})} */}
						</TableBody>
					</Table>
				</TableContainer>
				{/* <TablePagination
					rowsPerPageOptions={[10, 25, 100]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/> */}
			</Paper>

			{/* <TableContainer>
				<Table className="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>NAME</th>
							<th>CONTACT</th>
							<th className="expand">EMAIL</th>
							<th>ACTIONS</th>
						</tr>
					</thead>
					<tbody>
						{myData.map((post) => {
							const { id, name, contact, email } = post;
							return (
								<tr key={id}>
									<td>{id}</td>
									<td>{name}</td>
									<td>{contact}</td>
									<td>{email}</td>
									<td>
										<span className="actions">
											<BsFillPencilFill className="edit-btn" />
											<BsFillTrashFill
												className="delete-btn"
												onClick={() => deleteMyData(id)}
											/>
										</span>
									</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			</TableContainer> */}
		</>
	);
};

export default Tables;
