import axios from "axios";
import { useEffect, useState } from "react";

export default function Data() {
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

	{
		myData.map((data) => {
			const { id, name, zip, email } = data;

			return (
				<Data
					key={id}
					name={name}
					zip={zip}
					email={email}
				/>
			);
		});
	}
}
