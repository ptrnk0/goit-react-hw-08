import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return (
		<>
			<Link className="text-2xl cursor-pointer" to="/">
				Contacts Hub
			</Link>
			<nav>
				<ul className="flex gap-4">
					<li>
						<NavLink
							// className="block transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer py-2 px-4"
							to="/"
						>
							Home
						</NavLink>
					</li>
					{isLoggedIn && (
						<li>
							<NavLink
								// className="block transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer py-2 px-4"
								to="/contacts"
							>
								Contacts
							</NavLink>
						</li>
					)}
				</ul>
			</nav>
		</>
	);
};

export default Navigation;
