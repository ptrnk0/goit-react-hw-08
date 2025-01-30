import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { authRegister } from "../../redux/auth/operations";
import { useNavigate } from "react-router";

const Register = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const initialValues = {
		name: "",
		email: "",
		password: "",
	};

	const handleSubmit = (values, actions) => {
		dispatch(authRegister(values))
			.unwrap()
			.then(() => {
				navigate("/");
			});
		actions.resetForm();
	};

	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<Form
				className="rounded-lg shadow-md w-md flex flex-col justify-center px-8 py-4 gap-4
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
			>
				<label className="">
					Name
					<Field
						name="name"
						type="text"
						required
						className="
                        w-full outline-0 bg-amber-100 rounded-lg text-center py-2 px-2 focus:bg-amber-200 transition-all duration-300"
					/>
				</label>
				<label className="">
					Email
					<Field
						name="email"
						type="text"
						required
						className="
                        w-full outline-0 bg-amber-100 rounded-lg text-center py-2 px-2 focus:bg-amber-200 transition-all duration-300"
					/>
				</label>
				<label className="">
					Password
					<Field
						name="password"
						type="password"
						required
						className="
                        w-full outline-0 bg-amber-100 rounded-lg text-center py-2 px-2 focus:bg-amber-200 transition-all duration-300"
					/>
				</label>
				<button
					type="submit"
					className="bg-amber-100 rounded-lg px-4 py-2 w-max
                    self-center cursor-pointer hover:bg-amber-200 hover:shadow-md hover:shadow-amber-200 transition-all duration-300"
				>
					Sing Up
				</button>
			</Form>
		</Formik>
	);
};

export default Register;
