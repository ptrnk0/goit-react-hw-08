import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Header = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	return (
		<header className="font-display w-auto flex justify-between p-2 bg-amber-100 shadow-md mx-4 my-4 rounded-lg">
			<Link to="/" className="px-3 py-2 font-bold text-xl">
				Contacts Hub
			</Link>
			<nav>
				<ul className="flex">
					<li>
						<NavLink to="/">Contacts</NavLink>
					</li>
					{!isLoggedIn && (
						<li>
							<NavLink to="/register">Register</NavLink>
						</li>
					)}
					{!isLoggedIn && (
						<li>
							<NavLink to="/login">Log In</NavLink>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
