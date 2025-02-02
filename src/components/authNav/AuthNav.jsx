import { NavLink } from "react-router";

const AuthNav = () => {
	return (
		<nav>
			<ul className="flex gap-4">
				<li>
					<NavLink
						// className="block transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer py-2 px-4"
						to="/register"
					>
						Register
					</NavLink>
				</li>

				<li>
					<NavLink
						// className="block transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer py-2 px-4"
						to="/login"
					>
						Log In
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default AuthNav;
