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
			<thead>
				<tr>
					<th>ID</th>
					<th>NAME</th>
					<th>CONTACT</th>
					<th>EMAIL</th>
					<th>ACTIONS</th>
				</tr>
			</thead>
			{myData.map((post) => {
				const { id, name, contact, email } = post;
				return (
					<div
						className="App"
						key={id}>
						<tbody>
							<tr>
								<td>{id}</td>
								<td>{name}</td>
								<td>{contact}</td>
								<td>{email}</td>
								<td>
									<span>
										<BsFillPencilFill />
										<BsFillTrashFill />
									</span>
								</td>
							</tr>
						</tbody>
					</div>
				);
			})}
		</>
	);
};

export default Table;
