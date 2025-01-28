import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
	const dispatch = useDispatch();
	const handleDelete = () => {
		dispatch(deleteContact(contact.id));
	};
	return (
		<>
			<h3>{contact.name}</h3>
			<p>{contact.number}</p>
			<button type="button" onClick={handleDelete}>
				Delete
			</button>
		</>
	);
};

export default Contact;
