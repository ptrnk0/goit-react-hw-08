import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

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

const ContactForm = () => {
	const dispatch = useDispatch();
	const initialValues = { name: "", number: "" };

	const handleSubmit = (values, actions) => {
		dispatch(addContact(values));
		actions.resetForm(initialValues);
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={contactFormSchema}
			onSubmit={handleSubmit}
		>
			<Form>
				<fieldset className="fieldset w-50 bg-base-200 shadow-lg p-4 rounded-box">
					<legend end className="fieldset-legend">
						Add contact
					</legend>

					<label className="fieldset-label" htmlFor="name">
						Name
					</label>
					<Field
						id="name"
						type="text"
						name="name"
						placeholder="Name"
						className="input"
					/>
					<ErrorMessage name="name" component="span"></ErrorMessage>

					<label className="fieldset-label" htmlFor="number">
						Phone number
					</label>
					<Field
						id="number"
						type="text"
						name="number"
						placeholder="Phone number"
						className="input"
					/>
					<ErrorMessage name="number" component="span"></ErrorMessage>

					<button className="btn btn-neutral mt-4" type="submit">
						Add
					</button>
				</fieldset>
			</Form>
		</Formik>
	);
};

export default ContactForm;
