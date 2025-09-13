import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          Workout<span>Tracker</span>
        </Link>

        {/* Desktop Links */}
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <NavLink to="/about" className="nav-item">
            About
          </NavLink>

          {!user && (
            <>
              <NavLink to="/login" className="nav-item">
                Login
              </NavLink>
              <NavLink to="/signup" className="nav-item">
                Sign Up
              </NavLink>
            </>
          )}

          {user && (
            <>
              <span className="nav-item user-email">{user.email}</span>
              <button onClick={handleLogout} className="nav-item logout-btn">
                Logout
              </button>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
