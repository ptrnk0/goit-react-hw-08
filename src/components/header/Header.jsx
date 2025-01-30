import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Header = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	return (
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
	);
};

export default Header;
