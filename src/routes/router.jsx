import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Women from "../pages/Women/Women";
import Men from "../pages/Men/Men";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/women",
        element: <Women />,
      },
      { path: "/men", element: <Men /> },
      { path: "/login", element: <Login /> },
      { path: "/signUp", element: <SignUp /> },
    ],
  },
]);
