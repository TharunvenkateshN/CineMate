import { Link } from "react-router-dom"
import "../css/Navbar.css";


function NavBar() {
  return (
    <div className="app">
    <div className="navblock">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/"><img src="/cinelogo.png" alt="Cinemate Logo" className="logo" /></Link>
        </div>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/favourites" className="nav-link">Favourites</Link>
        </div>
      </nav>
    </div>
    </div>
  )
}

export default NavBar
