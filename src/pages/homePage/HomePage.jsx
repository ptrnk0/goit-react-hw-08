import { Link } from "react-router";

const Home = () => {
	return (
		<div
			className="hero h-full rounded-xl overflow-hidden"
			style={{
				backgroundImage:
					"url(https://img.freepik.com/free-vector/gradient-black-background-with-wavy-lines_23-2149158560.jpg?t=st=1738516237~exp=1738519837~hmac=45eb5890c4d4a35eaf92e3c7b54f28d5018c8cfb9a4d9ed0a89031c28df5a237&w=1800)",
			}}
		>
			<div className="hero-overlay"></div>
			<div className="hero-content text-neutral-content text-center">
				<div className="max-w-lg">
					<h1 className="mb-5 text-5xl font-bold">Hello there</h1>
					<p className="mb-5">
						Easily create, organize, and store important contacts in
						a secure space. Forget the mess in notebooks - manage
						your contacts quickly and effortlessly!
					</p>
					<Link to="/contacts" className="btn btn-neutral">
						Get Started
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
