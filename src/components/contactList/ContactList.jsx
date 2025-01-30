import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../contact/Contact";

const ContactList = () => {
	const contacts = useSelector(selectFilteredContacts);

	return (
		<ul>
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
