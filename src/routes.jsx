import { createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import Profile from "./components/Profile.jsx";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import NotFound from "./components/NotFound.jsx";
import Forbidden from "./components/Forbidden.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          { path: "", element: <Home /> },
          { path: "profile/:username", element: <Profile /> },
        ],
      },
    ],
  },
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  { path: "/forbidden", element: <Forbidden /> },
  { path: "*", element: <NotFound /> },
]);

export default router;
