import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";

const initialState = {
	items: [],
	loading: false,
	error: null,
};

const contactsSlice = createSlice({
	name: "contacts",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(addContact.fulfilled, (state, action) => {
				state.loading = false;
				state.items.push(action.payload);
			})
			.addCase(deleteContact.fulfilled, (state, action) => {
				state.loading = false;
				state.items = state.items.filter(
					(contact) => contact.id !== action.payload.id
				);
			})
			.addMatcher(
				isAnyOf(
					fetchContacts.pending,
					addContact.pending,
					deleteContact.pending
				),
				(state) => {
					state.loading = true;
					state.error = null;
				}
			)
			.addMatcher(
				isAnyOf(
					fetchContacts.rejected,
					addContact.rejected,
					deleteContact.rejected
				),
				(state, action) => {
					state.loading = false;
					state.error = action.payload;
				}
			);
	},
});

export default contactsSlice.reducer;
