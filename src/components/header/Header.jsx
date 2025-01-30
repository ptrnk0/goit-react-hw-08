import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Header = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	return (
		<header>
			<Link>Contacts Hub</Link>
			<nav>
				<ul>
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
