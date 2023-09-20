import { useEffect, useState } from "react";
import "./Table.css";
import axios from "axios";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

const Table = () => {
	const [myData, setMyData] = useState([]);

	useEffect(() => {
		axios
			.get("https://6506a0c63a38daf4803e8937.mockapi.io/project1")
			.then((res) => setMyData(res.data));
	}, []);

	return (
		<>
			<table className="table">
				<thead>
					<tr>
						<th>ID</th>
						<th>NAME</th>
						<th>CONTACT</th>
						<th className="expand">EMAIL</th>
						<th>ACTIONS</th>
					</tr>
				</thead>
				{myData.map((post) => {
					const { id, name, contact, email } = post;
					return (
						<div
							className="table-data"
							key={id}>
							<tbody>
								<tr>
									<td>{id}</td>
									<td>{name}</td>
									<td>{contact}</td>
									<td>{email}</td>
									<td>
										<span className="actions">
											<BsFillPencilFill className="edit-btn" />
											<BsFillTrashFill className="delete-btn" />
										</span>
									</td>
								</tr>
							</tbody>
						</div>
					);
				})}
			</table>
		</>
	);
};

export default Table;
