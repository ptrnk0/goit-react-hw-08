import { Suspense } from "react";
import { Route, Routes } from "react-router";
import Layout from "../layout/Layout";
import Contacts from "../../pages/contacts/Contacts";
import Register from "../../pages/register/Register";
import NotFound from "../../pages/notFound/NotFound";
import Login from "../../pages/login/Login";

const App = () => {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Contacts />} />
					<Route path="register" element={<Register />} />
					<Route path="login" element={<Login />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</Suspense>
	);
};

export default App;
