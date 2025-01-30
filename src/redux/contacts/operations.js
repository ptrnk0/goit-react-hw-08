import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsApi } from "../../services/contactsApi";

export const fetchContacts = createAsyncThunk(
	"contacts/fetchContacts",
	async (_, thunkApi) => {
		try {
			const { data } = await contactsApi.get("/contacts");
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

export const addContact = createAsyncThunk(
	"contacts/addContact",
	async (body, thunkApi) => {
		try {
			const { data } = await contactsApi.post("/contacts", body);
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

export const deleteContact = createAsyncThunk(
	"constacts/deleteContact",
	async (contactId, thunkApi) => {
		try {
			const { data } = await contactsApi.delete(`/contacts/${contactId}`);
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);
