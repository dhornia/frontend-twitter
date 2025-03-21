import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Slide, ToastContainer } from "react-toastify";

import "./index.css";
import { store, persistor } from "./redux/storeConfig.js";
import SignUp from "./components/SignUp.jsx";
import Home from "./components/Home.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Login from "./components/Login.jsx";
import NotFound from "./components/NotFound.jsx";
import Profile from "./components/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [{ path: "", element: <Home /> }],
  },
  {
    path: "/:username",
    element: <ProtectedRoute />,
    children: [{ path: "/:username", element: <Profile /> }],
  },

  ,
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  { path: "*", element: <NotFound /> },
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        />
      </PersistGate>
    </Provider>
  </StrictMode>,
);
