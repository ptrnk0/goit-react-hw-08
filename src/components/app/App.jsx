import { useDispatch, useSelector } from "react-redux";
import ContacForm from "../contacForm/ContacForm";
import ContactList from "../contactList/ContactList";
import SearchBox from "../searchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { selectError, selectLoading } from "../../redux/selectors";
import css from "./App.module.css";

const App = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectLoading);
	const error = useSelector(selectError);

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	return (
		<main className={css.main}>
			<ContacForm />
			<SearchBox />
			{error && <p>Something went wrong.</p>}
			{isLoading && <p>Loading...</p>}
			<ContactList />
		</main>
	);
};

export default App;
