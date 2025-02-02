import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { authLogout } from "../../redux/auth/operations";

const UserMenu = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(authLogout());
	};

	return (
		isLoggedIn && (
			<button
				onClick={handleClick}
				className="block transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer py-2 px-4"
			>
				Log Out
			</button>
		)
	);
};

export default UserMenu;
