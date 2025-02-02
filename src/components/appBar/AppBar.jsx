import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../navigation/Navigation";
import UserMenu from "../userMenu/UserMenu";
import AuthNav from "../authNav/AuthNav";

const AppBar = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return (
		<header className="font-display justify-between flex p-2 bg-base-200 shadow-md mx-4 mt-4 rounded-lg items-center flex-wrap">
			<Navigation />
			{isLoggedIn ? <UserMenu /> : <AuthNav />}
		</header>
	);
};

export default AppBar;
