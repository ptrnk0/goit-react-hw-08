import { NavLink, Outlet } from "react-router";

const Layout = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<NavLink to="/">Contacts</NavLink>
					</li>
					<li>
						<NavLink to="/register">Register</NavLink>
					</li>
					<li>
						<NavLink to="/login">Log In</NavLink>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
};

export default Layout;
