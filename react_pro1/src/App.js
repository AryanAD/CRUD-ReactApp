import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import axios from "./API/axios";
import { format } from "date-fns";
import Nav from "./Nav";
import PostPage from "./components/PostPage";
import NewPost from "./components/NewPost";

function App() {
	const getApiData = async () => {
		try {
			const res = await axios.get("/project1");
			setPosts(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		getApiData();
	}, []);

	const [postTitle, setPostTitle] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [search, setSearch] = useState("");
	const [postBody, setPostBody] = useState("");
	const [posts, setPosts] = useState("");
	const nav = useNavigate();

	useEffect(() => {
		const filteredResults = posts.filter(
			(post) =>
				post.body.toLowerCase().includes(search.toLowerCase()) ||
				post.title.toLowerCase().includes(search.toLowerCase())
		);

		setSearchResults(filteredResults.reverse());
	}, [posts, search]);

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
			<Routes>
				<Route path="/" element={<Nav search={search} setSearch={setSearch} />}>
					<Route index element={<Home posts={searchResults} />} />
					<Route path="post">
						<Route
							index
							element={
								<NewPost
									handleSubmit={handleSubmit}
									postTitle={postTitle}
									setPostTitle={setPostTitle}
									postBody={postBody}
									setPostBody={setPostBody}
								/>
							}
						/>
						<Route
							path="/post"
							element={<PostPage posts={posts} handleDelete={handleDelete} />}
						/>
					</Route>
				</Route>
			</Routes>

			<Link to="/">HOME</Link>
			<Link to="/add"> ADD DATA</Link>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/add" element={<NewPost />} />
			</Routes>
		</>
	);
}

export default App;
