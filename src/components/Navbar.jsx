import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        ⚛️ Auth Demo
      </Link>

      <div className="nav-links">
        <Link to="/">🏠 Home</Link>

        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <span  className="nav-username">Hello, {user.name}</span>
            <button
          onClick={() => {
          logout();
          navigate("/login");
         }}>
         Logout
         </button>
          </>) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
