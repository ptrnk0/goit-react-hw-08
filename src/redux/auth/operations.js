import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsApi, setAuthHeaders } from "../../services/contactsApi";

export const authRegister = createAsyncThunk(
	"auth/authRegister",
	async (creadentials, thunkApi) => {
		try {
			const { data } = await contactsApi.post("/users/signup", {
				...creadentials,
			});
			setAuthHeaders(data.token);
			return data;
		} catch (error) {
			thunkApi.rejectWithValue(error.message);
		}
	}
);

export const authLogin = createAsyncThunk(
	"auth/authLogin",
	async (credential, thunkApi) => {
		try {
			const { data } = await contactsApi.post("/users/login", {
				...credential,
			});
			setAuthHeaders(data.token);
			return data;
		} catch (error) {
			thunkApi.rejectWithValue(error.message);
		}
	}
);

export const authLogout = createAsyncThunk(
	"auth/logout",
	async (_, thunkApi) => {
		try {
			const { data } = await contactsApi.post("/users/logout");
			return data;
		} catch (error) {
			thunkApi.rejectWithValue(error.message);
		}
	}
);
