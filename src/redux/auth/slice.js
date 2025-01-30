import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { authLogin, authRegister } from "./operations";

const initialState = {
	user: {
		name: null,
		email: null,
	},
	token: null,
	isLoggedIn: false,
	isRefreshing: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	extraReducers: (builder) => {
		builder.addMatcher(
			isAnyOf(authRegister.fulfilled, authLogin.fulfilled),
			(state, action) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isLoggedIn = true;
			}
		);
	},
});

export default authSlice.reducer;
