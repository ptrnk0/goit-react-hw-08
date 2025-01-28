import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";
import Contact from "../contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
	const contacts = useSelector(selectFilteredContacts);

	return (
		<ul className={css.contactsList}>
			{contacts &&
				contacts.map((contact) => {
					return (
						<li key={contact.id}>
							<Contact contact={contact} />
						</li>
					);
				})}
		</ul>
	);
};

export default ContactList;
