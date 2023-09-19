import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import { useState } from "react";
import API from "./API/axios";
import { format } from "date-fns";

function App() {
	const [postTitle, setPostTitle] = useState("");
	const [postBody, setPostBody] = useState("");
	const [posts, setPosts] = useState(API);
	const nav = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
		const datetime = format(new Date(), "MMMM dd, yyyy pp");
		const newPost = { id, title: postTitle, datetime, body: postBody };
		const allPosts = [...posts, newPost];
		setPosts(allPosts);
		setPostTitle("");
		setPostBody("");
		nav("/");
	};

	const handleDelete = (id) => {
		const postsList = posts.filter((post) => post.id !== id);
		setPosts(postsList);
		nav("/");
	};
	return (
		<>
			<Link to="/">HOME</Link>
			<Link to="/add"> ADD DATA</Link>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/add" element={<Add />} />
			</Routes>
		</>
	);
}

export default App;
