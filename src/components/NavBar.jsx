import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="app">
      <div className="navblock">
        <nav className="navbar">
          <div className="navbar-brand">
            <Link to="/">
              <img src="/cinelogo.png" alt="Cinemate Logo" className="logo" />
            </Link>
          </div>

          {/* Hamburger button */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Links */}
          <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link
              to="/favourites"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Favourites
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
