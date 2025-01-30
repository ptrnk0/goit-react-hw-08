import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/slice";
import filterReducer from "./filter/slice";
import authReducer from "./auth/slice";

const store = configureStore({
	reducer: {
		contacts: contactsReducer,
		filter: filterReducer,
		auth: authReducer,
	},
});

export default store;
