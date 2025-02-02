import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../contact/Contact";

const ContactList = () => {
	const contacts = useSelector(selectFilteredContacts);

	return (
		<div className="overflow-x-auto w-full">
			<table className="table">
				<thead>
					<tr>
						<th></th>
						<th>Name</th>
						<th>Number</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{contacts &&
						contacts.map((contact, index) => {
							return (
								<tr
									className="hover:bg-base-300"
									key={contact.id}
								>
									<Contact contact={contact} line={++index} />
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default ContactList;
