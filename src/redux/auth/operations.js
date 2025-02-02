import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsApi, setAuthHeaders } from "../../services/contactsApi";
import toast from "react-hot-toast";

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
			if (error.response.data.code === 11000) {
				toast.error("User already exist!");
				return thunkApi.rejectWithValue(error.message);
			}
			return thunkApi.rejectWithValue(error.message);
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
			return thunkApi.rejectWithValue(error.message);
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
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

export const authRefresh = createAsyncThunk(
	"auth/refresh",
	async (_, thunkApi) => {
		const savedToken = thunkApi.getState().auth.token;

		if (!savedToken) {
			return thunkApi.rejectWithValue("Token is not exist!");
		}
		setAuthHeaders(savedToken);

		try {
			const { data } = await contactsApi.get("/users/current");
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);
