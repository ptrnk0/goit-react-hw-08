import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";

const contactFormSchema = Yup.object().shape({
	name: Yup.string()
		.min(3, "Name must be at least 3 characters")
		.max(50, "Name must be at most 50 characters")
		.required("Name is required"),
	number: Yup.string()
		.min(3, "Number must be at least 3 characters")
		.max(50, "Number must be at most 50 characters")
		.required("Number is required"),
});

const ContacForm = () => {
	const dispatch = useDispatch();
	const initialValues = { name: "", number: "" };

	const handleSubmit = (values, actions) => {
		dispatch(addContact(values));
		actions.resetForm(initialValues);
	};

	return (
		<div className={css.contactFormContainer}>
			<h2>Add contact</h2>
			<Formik
				initialValues={initialValues}
				validationSchema={contactFormSchema}
				onSubmit={handleSubmit}
			>
				<Form>
					<div className={css.fieldContainer}>
						<Field type="text" name="name" placeholder="Name" />
						<ErrorMessage
							name="name"
							component="span"
						></ErrorMessage>
					</div>
					<div className={css.fieldContainer}>
						<Field
							type="text"
							name="number"
							placeholder="Phone number"
						/>
						<ErrorMessage
							name="number"
							component="span"
						></ErrorMessage>
					</div>
					<button type="submit">Add</button>
				</Form>
			</Formik>
		</div>
	);
};

export default ContacForm;
