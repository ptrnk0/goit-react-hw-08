import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export const fetchContacts = createAsyncThunk(
	"contacts/fetchContacts",
	async (_, thunkAPI) => {
		try {
			const { data } = await axios.get("/contacts");
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const addContact = createAsyncThunk(
	"contacts/addContact",
	async (body, thunkAPI) => {
		try {
			const { data } = await axios.post("/contacts", body);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const deleteContact = createAsyncThunk(
	"constacts/deleteContact",
	async (contactId, thunkAPI) => {
		try {
			const { data } = await axios.delete(`/contacts/${contactId}`);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
