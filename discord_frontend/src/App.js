// import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./authPages/LoginPage/LoginPage";
import RegisterPage from "./authPages/RegisterPage/RegisterPage";
import Dashboard from "./Dashboard/Dashboard";
import ErrorPage from "./ErrorElement";

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
export const appRouter = createBrowserRouter([
  //must be an array
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);
