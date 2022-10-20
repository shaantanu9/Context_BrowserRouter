import { Route, Routes } from "react-router";
import Login from "../components/LoginForm";
import Navbar from "../components/Navbar";
import Home from "../components/Home";

export default function AllRoutes() {
  const routes = [
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/navbar",
      element: <Navbar />
    },
    {
      path: "/",
      element: <Home />
    }
  ];
  return (
    <Routes>
      {routes.map((el) => (
        <Route path={el.path} element={el.element} />
      ))}
    </Routes>
  );
}
