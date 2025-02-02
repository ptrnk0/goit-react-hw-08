import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { authRegister } from "../../redux/auth/operations";

const RegistrationForm = () => {
	const dispatch = useDispatch();
	const initialValues = {
		name: "",
		email: "",
		password: "",
	};

	const handleSubmit = (values, actions) => {
		dispatch(authRegister(values));
		actions.resetForm();
	};

	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<Form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
				<fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
					<legend className="fieldset-legend">Register</legend>
					<label className="fieldset-label" htmlFor="name">
						Name
					</label>
					<Field
						name="name"
						type="text"
						required
						className="input"
						id="name"
					/>
					<label className="fieldset-label" htmlFor="email">
						Email
					</label>
					<Field
						name="email"
						type="text"
						required
						className="input"
						id="email"
					/>
					<label className="fieldset-label" htmlFor="password">
						Password
					</label>
					<Field
						name="password"
						type="password"
						required
						className="input"
						id="password"
					/>
					<button type="submit" className="btn btn-neutral mt-4">
						Sing Up
					</button>
				</fieldset>
			</Form>
		</Formik>
	);
};

export default RegistrationForm;
