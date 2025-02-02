import { createSlice, isAllOf, isAnyOf } from "@reduxjs/toolkit";
import { authLogin, authLogout, authRefresh, authRegister } from "./operations";

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
		builder
			.addCase(authLogout.fulfilled, () => {
				return initialState;
			})
			.addCase(authRefresh.pending, (state) => {
				state.isRefreshing = true;
			})
			.addCase(authRefresh.fulfilled, (state, action) => {
				state.isRefreshing = false;
				state.isLoggedIn = true;
				state.user.name = action.payload.name;
				state.user.email = action.payload.email;
			})
			.addCase(authRefresh.rejected, (state) => {
				state.isRefreshing = false;
			})
			.addMatcher(
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
