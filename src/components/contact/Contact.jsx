import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ contact, line }) => {
	const dispatch = useDispatch();
	const handleDelete = () => {
		dispatch(deleteContact(contact.id));
	};
	return (
		<>
			<th>{line}</th>
			<td>{contact.name}</td>
			<td>{contact.number}</td>
			<td>
				<button type="button" onClick={handleDelete}>
					Delete
				</button>
			</td>
		</>
	);
};

export default Contact;
