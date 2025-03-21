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
        <button
          type="button"
          onClick={handleDelete}
          className="border-2 p-1 rounded-sm cursor-pointer hover:scale-110 transition-all ease-in"
        >
          Delete
        </button>
      </td>
    </>
  );
};

export default Contact;
