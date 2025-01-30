import { Outlet } from "react-router";
import Header from "../header/Header";

const Layout = () => {
	return (
		<>
			<Header />
			<main className="font-display">
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
