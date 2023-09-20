import "./Model.css";

const Model = ({ closeModel }) => {
	return (
		<div
			className="model-container"
			onClick={(e) => {
				if (e.target.className === "model-container") closeModel();
			}}>
			<div className="model">
				<form>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input
							autoFocus
							type="text"
							name="name"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="contact">Contact</label>
						<input
							type="number"
							name="contact"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							required
						/>
					</div>
					<button
						type="submit"
						className="btn">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Model;
