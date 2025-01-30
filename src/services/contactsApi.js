import axios from "axios";

export const contactsApi = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});

export const setAuthHeaders = (token) =>
	(contactsApi.defaults.headers.common.Authorization = `Bearer ${token}`);
