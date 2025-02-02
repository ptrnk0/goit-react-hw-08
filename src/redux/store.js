import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/slice";
import filterReducer from "./filter/slice";
import authReducer from "./auth/slice";
import storage from "redux-persist/lib/storage";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";

const persistConfig = {
	key: "token",
	whitelist: ["token"],
	storage,
};

const authPersistedReducer = persistReducer(persistConfig, authReducer);
export const store = configureStore({
	reducer: {
		contacts: contactsReducer,
		filter: filterReducer,
		auth: authPersistedReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
});
export const persistor = persistStore(store);
