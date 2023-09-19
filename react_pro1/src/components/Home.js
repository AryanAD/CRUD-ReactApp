import React from "react";
import Nav from "../Nav";

const Home = ({ search, setSearch }) => {
	return (
		<h1>
			Homepage(display)
			<Nav search={search} setSearch={setSearch} />
		</h1>
	);
};

export default Home;
