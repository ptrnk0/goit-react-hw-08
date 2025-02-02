import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/contactForm/ContactForm";
import ContactList from "../../components/contactList/ContactList";
import SearchBox from "../../components/searchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import Loader from "../../components/loader/Loader";

const Contacts = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectLoading);
	const error = useSelector(selectError);

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	return (
		<div className="flex gap-12">
			<ContactForm />
			<div className="grow-1">
				<SearchBox />
				<div className="flex items-center flex-col relative">
					{error && <p>Something went wrong.</p>}
					{isLoading && <Loader />}
					<ContactList />
				</div>
			</div>
		</div>
	);
};

export default Contacts;
