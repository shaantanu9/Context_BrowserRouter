import Login from "./components/LoginForm";
import Navbar from "./components/Navbar";
import AllRoutes from "./routes/AllRoutes";
import "./styles.css";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">home</Link>
        <br />
        <Link to="/navbar">navbar</Link>
        <br />
        <a href="/login">Login</a>
      </div>
      <AllRoutes />
    </div>
  );
}
