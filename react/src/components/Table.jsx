import { useEffect, useState } from "react";
import "./Table.css";
import axios from "axios";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

const Table = () => {
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
			</table>
		</>
	);
};

export default Table;
