import { Outlet } from "react-router";
import AppBar from "../appBar/AppBar";

const Layout = () => {
	return (
		<div className="flex flex-col h-screen">
			<AppBar />
			<main className="font-display px-10 mt-10 grow">
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
