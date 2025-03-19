import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import { store, persistor } from "./redux/storeConfig.js";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/LogIn.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>,
);
