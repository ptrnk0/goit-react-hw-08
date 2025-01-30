import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Header = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	return (
		<header className="font-display w-auto flex justify-between p-2 bg-amber-100 shadow-md mx-4 my-4 rounded-lg items-center flex-wrap">
			<Link to="/" className="px-3 py-2 font-bold text-xl">
				Contacts Hub
			</Link>
			<nav>
				<ul className="flex gap-8 flex-wrap">
					<li>
						<NavLink
							to="/"
							className="py-2 px-3 transform transition-all duration-300 ease-in-out hover:scale-110 inline-block"
						>
							Contacts
						</NavLink>
					</li>
					{!isLoggedIn && (
						<li>
							<NavLink
								to="/register"
								className="py-2 px-3 transform transition-all duration-300 ease-in-out hover:scale-110 inline-block"
							>
								Register
							</NavLink>
						</li>
					)}
					{!isLoggedIn && (
						<li>
							<NavLink
								to="/login"
								className="py-2 px-3 transform transition-all duration-300 ease-in-out hover:scale-110 inline-block"
							>
								Log In
							</NavLink>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
