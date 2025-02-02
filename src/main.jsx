import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "modern-normalize";
import App from "./components/app/App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { BrowserRouter } from "react-router";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<App />
					<Toaster />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</StrictMode>
);
