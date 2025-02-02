import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { authRefresh } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";

import Layout from "../layout/Layout";
import RestrictedRoute from "../restrictedRoute/RestrictedRoute";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Loader from "../loader/Loader";

const HomePage = lazy(() => import("../../pages/homePage/HomePage"));
const ContactsPage = lazy(() =>
	import("../../pages/contactsPage/ContactsPage")
);
const LoginPage = lazy(() => import("../../pages/loginPage/LoginPage"));
const RegistrationPage = lazy(() =>
	import("../../pages/registrationPage/RegistrationPage")
);
const NotFound = lazy(() => import("../../pages/notFound/NotFound"));

const App = () => {
	const isRefreshing = useSelector(selectIsRefreshing);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(authRefresh());
	}, [dispatch]);

	return isRefreshing ? null : (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route
						path="contacts"
						element={
							<PrivateRoute>
								<ContactsPage />
							</PrivateRoute>
						}
					/>
					<Route
						path="register"
						element={
							<RestrictedRoute>
								<RegistrationPage />
							</RestrictedRoute>
						}
					/>
					<Route
						path="login"
						element={
							<RestrictedRoute>
								<LoginPage />
							</RestrictedRoute>
						}
					/>
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</Suspense>
	);
};

export default App;
